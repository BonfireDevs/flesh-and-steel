#!/usr/bin/env python3
"""
Flesh & Steel — Server Populator

Copies all server-side mods, configs, KubeJS scripts, and data packs
into the server/ directory, skipping client-only mods.

Usage:
    python populate_server.py
"""

import shutil
import os
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent
SERVER_DIR = PROJECT_ROOT / "server"
SERVER_MODS_SRC = PROJECT_ROOT / "server_mods"
OVERRIDES_DIR = PROJECT_ROOT / "overrides"

# Client-only mods — these must NOT be loaded on a dedicated server.
# They will crash or are meaningless server-side.
CLIENT_ONLY_MODS = {
    # Rendering / Shaders
    "sodium",
    "iris",
    "indium",
    # UI / HUD (client rendering only)
    "modmenu",
    "xaerominimap", "xaeroworldmap",
    "appleskin",
    "BetterThirdPerson",
    "betterthirdperson",
    # Performance (client-side rendering)
    "entityculling",
    "immediatelyfast",
    "memoryleakfix",
    # Audio & Visual Atmosphere (client-side)
    "sound-physics-remastered",
    "ambientsounds",
    "presencefootsteps",
    "visuality",
    "effective",
    # Client chat cosmetics
    "chat_heads",
    # FPS limiter (client only)
    "dynamic-fps",
    "dynamic_fps",
    # Mouse / Input
    "MouseTweaks",
    "mousetweaks",
    # Inventory sorting UI
    "InventoryProfilesNext",
    "inventoryprofilesnext",
    "libIPN",
    "libipn",
    # Controlling (keybind UI)
    "Controlling",
    "controlling",
}


def is_client_only(filename: str) -> bool:
    """Check if a jar filename belongs to a client-only mod."""
    name_lower = filename.lower()
    for keyword in CLIENT_ONLY_MODS:
        if keyword.lower() in name_lower:
            return True
    return False


def copy_mods():
    """Copy server-side mods from server_mods/ into server/mods/."""
    dest = SERVER_DIR / "mods"
    dest.mkdir(parents=True, exist_ok=True)

    # Also include any override mods (manually patched jars)
    override_mods = OVERRIDES_DIR / "mods"

    copied = 0
    skipped = 0

    for src_dir in [SERVER_MODS_SRC, override_mods]:
        if not src_dir.exists():
            continue
        for jar in sorted(src_dir.glob("*.jar")):
            if is_client_only(jar.name):
                print(f"  ⏭  Skipped (client-only): {jar.name}")
                skipped += 1
                continue

            target = dest / jar.name
            if not target.exists() or jar.stat().st_size != target.stat().st_size:
                shutil.copy2(jar, target)
                print(f"  ✅ {jar.name}")
            else:
                print(f"  ✔  Already up-to-date: {jar.name}")
            copied += 1

    print(f"\n  📦 Mods: {copied} copied, {skipped} client-only skipped")


def copy_configs():
    """Copy config files from overrides/config/ into server/config/."""
    src = OVERRIDES_DIR / "config"
    dest = SERVER_DIR / "config"

    if not src.exists():
        print("  ⚠  No config overrides found")
        return

    dest.mkdir(parents=True, exist_ok=True)
    count = 0
    for item in src.rglob("*"):
        if item.is_file():
            rel = item.relative_to(src)
            target = dest / rel
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(item, target)
            print(f"  ✅ config/{rel}")
            count += 1
    print(f"\n  📝 Configs: {count} files copied")


def copy_kubejs():
    """Copy KubeJS server & startup scripts into server/kubejs/."""
    src = OVERRIDES_DIR / "kubejs"
    dest = SERVER_DIR / "kubejs"

    if not src.exists():
        print("  ⚠  No KubeJS scripts found")
        return

    count = 0
    for subdir in ["server_scripts", "startup_scripts"]:
        src_sub = src / subdir
        dest_sub = dest / subdir
        if not src_sub.exists():
            continue
        dest_sub.mkdir(parents=True, exist_ok=True)
        for item in src_sub.rglob("*"):
            if item.is_file():
                rel = item.relative_to(src_sub)
                target = dest_sub / rel
                target.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(item, target)
                print(f"  ✅ kubejs/{subdir}/{rel}")
                count += 1

    print(f"\n  📜 KubeJS scripts: {count} files copied")


def copy_data_packs():
    """Copy global data packs into server/global_data_packs/."""
    src = OVERRIDES_DIR / "global_data_packs"
    dest = SERVER_DIR / "global_data_packs"

    if not src.exists():
        print("  ⚠  No global data packs found")
        return

    if dest.exists():
        shutil.rmtree(dest)

    shutil.copytree(src, dest)
    count = sum(1 for _ in dest.rglob("*") if _.is_file())
    print(f"  📦 Data packs: {count} files copied")


def main():
    print("=" * 50)
    print(" ⚙  Flesh & Steel — Server Populator")
    print("=" * 50)
    print()

    SERVER_DIR.mkdir(parents=True, exist_ok=True)

    print("📦 Copying server-side mods...")
    copy_mods()
    print()

    print("📝 Copying configs...")
    copy_configs()
    print()

    print("📜 Copying KubeJS scripts...")
    copy_kubejs()
    print()

    print("📦 Copying global data packs...")
    copy_data_packs()
    print()

    print("=" * 50)
    print(" ✅ Server directory populated!")
    print(f"    Location: {SERVER_DIR}")
    print()
    print(" Next steps:")
    print("   1. cd server/")
    print("   2. ./install.sh    (download Fabric launcher + accept EULA)")
    print("   3. ./start.sh      (start the server)")
    print("=" * 50)


if __name__ == "__main__":
    main()

