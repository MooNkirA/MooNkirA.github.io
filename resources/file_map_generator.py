# -*- coding: utf-8 -*-
import json
from pathlib import Path

# ===================== 路径配置（适配新结构） =====================
# 脚本在 resources 目录，文档在【项目根目录】（上级目录）
DOCS_DIR = Path(__file__).parent.parent
# 索引文件输出到 resources 目录
OUTPUT_PATH = Path(__file__).parent / "file-map.json"
# =================================================================

def generate_file_map():
    file_map = {}
    if not DOCS_DIR.exists():
        return

    # 递归扫描根目录所有 md 文件（排除 resources 脚本文件夹）
    for md_file in DOCS_DIR.rglob("*.md"):
        # 跳过 resources 目录内的文件
        if "resources" in str(md_file):
            continue
        
        # 文件名（无后缀）
        name = md_file.stem
        # 真实绝对路径（根目录直接 /文件名.md）
        rel_path = md_file.relative_to(DOCS_DIR).as_posix()
        absolute_path = f"/{rel_path}"
        file_map[name] = absolute_path

    # 写入索引文件
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(file_map, f, ensure_ascii=False, indent=2)

    print(f"✅ 文件索引生成完成：{len(file_map)} 个文档")
    print(f"📄 索引路径：{OUTPUT_PATH}")

if __name__ == "__main__":
    generate_file_map()