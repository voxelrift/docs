---
title: Essential Commands
description: README for Essential Commands.
---

# 🛠️ Essential Commands

A lightweight, multiplatform (Fabric + NeoForge) essentials mod for Minecraft. Created as a dependency-free alternative to EssentialsX / FTBEssentials.

I built this because I couldn't find a lightweight alternative. This mod intends to add just the essential commands without extra fluff.

Supports **LuckPerms** for fine-grained permission control. Falls back to vanilla OP levels when LuckPerms is not installed.

---

## Configuration

Generated at `config/essential.commands.toml` on first launch. Reload at runtime with `/essentials reload`.

```toml
# Essential Commands Configuration

[general]
# Optional server name used in chat prefixes (e.g. "SuperCraft" → "[SuperCraft Essentials]")
# Leave empty to use the default "[Essentials]" prefix
server_name = ""

[homes]
# Enable the /home, /sethome, /delhome commands
enabled = true
# Allow players to have multiple named homes
multiple_homes = false
# Maximum homes per player (only used when multiple_homes = true)
max_homes = 5
# Require OP (level 2) for home commands, ignoring LuckPerms nodes
op_only = false
# Seconds the player must stand still before being teleported (0 = instant)
warmup_seconds = 5
# Seconds before the player can use /home again (0 = no cooldown)
cooldown_seconds = 60

[back]
# Enable the /back command
enabled = true
# Require OP (level 2) for /back
op_only = true
warmup_seconds = 5
cooldown_seconds = 60

[tpa]
# Enable the /tpa, /tpaaccept, /tpadeny commands
enabled = true
# Seconds before a TPA request expires
timeout_seconds = 60
# Warmup after the request is accepted (0 = instant)
warmup_seconds = 5
# Seconds before the requester can send another TPA (0 = no cooldown)
cooldown_seconds = 30

[warps]
# Enable the /warp, /setwarp, /delwarp, /warps commands
enabled = true
# Require OP (level 2) to use /warp (set/delete always require OP)
op_only = false
warmup_seconds = 5
cooldown_seconds = 60

[spawn]
# Enable the /spawn command
enabled = true
# Require OP (level 2) to use /spawn
op_only = false
warmup_seconds = 5
cooldown_seconds = 60

[enderchest]
# Enable the /enderchest (/ec) command
enabled = true
# Require OP (level 2) to use /enderchest
op_only = true

[workbench]
# Enable the /workbench (/craft) command
enabled = true
# Require OP (level 2) to use /workbench
op_only = true

[other]
# Require OP (level 2) to use /near
near_op_only = true
# Require OP (level 2) to use /seen
seen_op_only = true
```

---

## Commands

Use `/essentials [page]` in-game to see only the commands available to you.

### Teleport

| Command               | Description                                    | Permission node                       | Default     |
|-----------------------|------------------------------------------------|---------------------------------------|-------------|
| `/home [name]`        | Teleport to your home                          | `rift_essentials.command.home`        | all players |
| `/sethome [name]`     | Set a home at your location                    | `rift_essentials.command.home.set`    | all players |
| `/delhome [name]`     | Delete a home                                  | `rift_essentials.command.home.delete` | all players |
| `/homes`              | List all your homes                            | `rift_essentials.command.home.list`   | all players |
| `/back`               | Return to your previous location or death spot | `rift_essentials.command.back`        | OP          |
| `/spawn`              | Teleport to world spawn                        | `rift_essentials.command.spawn`       | all players |
| `/warp <name>`        | Teleport to a server warp                      | `rift_essentials.command.warp`        | all players |
| `/warps`              | List all server warps                          | `rift_essentials.command.warp`        | all players |
| `/setwarp <name>`     | Create a warp at your location                 | `rift_essentials.command.warp.manage` | OP          |
| `/delwarp <name>`     | Delete a warp                                  | `rift_essentials.command.warp.manage` | OP          |
| `/tpa <player>`       | Request to teleport to a player                | `rift_essentials.command.tpa`         | all players |
| `/tpaaccept <player>` | Accept a teleport request                      | `rift_essentials.command.tpa.respond` | all players |
| `/tpadeny <player>`   | Deny a teleport request                        | `rift_essentials.command.tpa.respond` | all players |
| `/tppos <x> <y> <z>`  | Teleport to coordinates (supports `~`)         | `rift_essentials.command.tppos`       | OP          |
| `/tphere <player>`    | Teleport a player to your location             | `rift_essentials.command.tphere`      | OP          |

### Social

| Command                | Description                                | Permission node                     | Default     |
|------------------------|--------------------------------------------|-------------------------------------|-------------|
| `/msg <player> <msg>`  | Send a private message                     | `rift_essentials.command.msg`       | all players |
| `/tell <player> <msg>` | Alias for `/msg`                           | `rift_essentials.command.msg`       | all players |
| `/r <message>`         | Reply to the last private message received | `rift_essentials.command.msg`       | all players |
| `/afk`                 | Toggle AFK status                          | `rift_essentials.command.afk`       | all players |
| `/near [radius]`       | List players within N blocks (default 100) | `rift_essentials.command.near`      | all players |
| `/seen <player>`       | Show when a player was last online         | `rift_essentials.command.seen`      | all players |
| `/nick <name\|off>`    | Set or clear your display nickname         | `rift_essentials.command.nick`      | OP          |
| `/broadcast <msg>`     | Announce to all players                    | `rift_essentials.command.broadcast` | OP          |
| `/bc <msg>`            | Alias for `/broadcast`                     | `rift_essentials.command.broadcast` | OP          |

### Utility

| Command          | Description                           | Permission node                                | Default     |
|------------------|---------------------------------------|------------------------------------------------|-------------|
| `/heal [player]` | Restore health and remove all effects | `rift_essentials.command.heal` / `.heal.other` | OP          |
| `/feed [player]` | Restore hunger and saturation         | `rift_essentials.command.feed` / `.feed.other` | OP          |
| `/fly [player]`  | Toggle flight ability                 | `rift_essentials.command.fly` / `.fly.other`   | OP          |
| `/god [player]`  | Toggle invincibility                  | `rift_essentials.command.god` / `.god.other`   | OP          |
| `/repair`        | Repair the item in your main hand     | `rift_essentials.command.repair`               | OP          |
| `/workbench`     | Open a crafting table anywhere        | `rift_essentials.command.workbench`            | all players |
| `/craft`         | Alias for `/workbench`                | `rift_essentials.command.workbench`            | all players |
| `/enderchest`    | Open your ender chest anywhere        | `rift_essentials.command.enderchest`           | all players |
| `/ec`            | Alias for `/enderchest`               | `rift_essentials.command.enderchest`           | all players |

### Admin

| Command              | Description                      | Default     |
|----------------------|----------------------------------|-------------|
| `/essentials reload` | Reload config without restarting | OP          |
| `/essentials [page]` | Show commands available to you   | all players |

---

## Warmup & Cooldowns

Teleport commands support configurable warmup timers and cooldowns. Set either to `0` to disable.

During warmup:
- A countdown message is displayed
- Moving to a different block **cancels** the teleport
- Taking damage **cancels** the teleport

Cooldowns begin only after a successful teleport.

---

## Persistence

All player data is saved to `<world>/data/rift_essentials.dat` (standard Minecraft NBT `SavedData`). Saves automatically with the world. Includes:

- Homes and server warps
- Previous locations (`/back`)
- Nicknames
- Last-seen timestamps and username index (for offline `/seen` lookups)

---

## Full Permission Node Reference

```
rift_essentials.command.home
rift_essentials.command.home.set
rift_essentials.command.home.delete
rift_essentials.command.home.list
rift_essentials.command.back
rift_essentials.command.spawn
rift_essentials.command.warp
rift_essentials.command.warp.manage
rift_essentials.command.tpa
rift_essentials.command.tpa.respond
rift_essentials.command.tppos
rift_essentials.command.tphere
rift_essentials.command.msg
rift_essentials.command.afk
rift_essentials.command.near
rift_essentials.command.seen
rift_essentials.command.nick
rift_essentials.command.broadcast
rift_essentials.command.heal
rift_essentials.command.heal.other
rift_essentials.command.feed
rift_essentials.command.feed.other
rift_essentials.command.fly
rift_essentials.command.fly.other
rift_essentials.command.god
rift_essentials.command.god.other
rift_essentials.command.repair
rift_essentials.command.workbench
rift_essentials.command.enderchest
```
