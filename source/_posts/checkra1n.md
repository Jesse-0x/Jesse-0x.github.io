---
title: checkra1n
comments: true
math: true
quicklink: true
date: 2021-02-03 21:14:00
top_image: /images/2021/checker1n.png
categories:
  - [Apple, iOS Revers]
  - [Operating System, iOS]
  - [Projects, Booking OS]
tags:
  - Experience & Guide
  - Projects & Tools
  - Thoughts & ideas
---

# Checkra1n

Jailbreak for iPhone 5s through iPhone X, iOS 12.0 and up

<!-- more -->

![image](/images/2021/checker1n.png)

------

## Introduction

checkra1n is a powerful tool to jailbreak, until now (2021.11.07) it supports all the iOS versions from 12.0.

![main](/images/2021/cher-main.png)

It looks like this, and the main website is [here](https://checkra.in).

It is more powerful (of course, you need a computer) than unc0ver and other tools, because it can do more functions, support more devices and the iOS version. However, it is not a perfect jailbreak, that means every time when you restart, it will back to unjailbreak.

It is based on the '[checkm8](https://twitter.com/axi0mX/status/1177542201670168576)' exploit, an unpatchable bootrom. More tools based on this exploit: [ipwnduf](https://github.com/axi0mX/ipwndfu)(By the original discover person)

## Functions

### GUI memu:

Start: Start jailbreal

options:verbose boot just will show the log when apple start booting(iboot)

### Terminal Mode:

```
#
# Checkra1n beta 0.12.4
#
# Proudly written in nano
# (c) 2019-2021 Kim Jong Cracks
#
#========  Made by  =======
# argp, axi0mx, danyl931, jaywalker, kirb, littlelailo, nitoTV
# never_released, nullpixel, pimskeks, qwertyoruiop, sbingner, siguza
#======== Thanks to =======
# haifisch, jndok, jonseals, xerub, lilstevie, psychotea, sferrini
# Cellebrite (ih8sn0w, cjori, ronyrus et al.)
#==========================

Usage: /Applications/checkra1n.app/Contents/MacOS/checkra1n [OPTIONS]

  -h, --help    prints usage information

Options:
  --version                           Print version
  --force-revert                      Force Rootfs Reversion
  -c, --cli                           Force command line
  -d, --demote                        Demote
  -E, --early-exit                    Exits after uploading Pongo
  -e, --extra-bootargs <BOOTARGS>     Set extra bootargs
  -g, --gui                           Start a graphical user interface
  -k, --override-pongo <FILE PATH>    Override pongo image
  -l, --log-path <FILE PATH>          Log to file
  -n, --no-colors                     Disable colors on the command line
  -p, --pongo                         Boots to a Pongo shell
  -q, --quick                         Enable Quick Mode
  -s, --safe-mode                     Enter Safe-Mode
  -t, --tui                           Start a terminal graphical user interface
  -V, --verbose-boot                  Verbose Boot
  -v, --verbose-logging               Verbose logging
  -w, --wui <IPV4> <PORT>             Start webra1n - a web based user interface

Environment Variables:
  CHECKRA1N_VERSION=1                     Print version
  CHECKRA1N_FORCE_REVERT=1                Force Rootfs Reversion
  CHECKRA1N_CLI=1                         Force command line
  CHECKRA1N_DEMOTE=1                      Demote
  CHECKRA1N_EARLY_EXIT=1                  Exits after uploading Pongo
  CHECKRA1N_EXTRA_BOOTARGS=<BOOTARGS>     Set extra bootargs
  CHECKRA1N_GUI=1                         Start a graphical user interface
  CHECKRA1N_OVERRIDE_PONGO=<FILE PATH>    Override pongo image
  CHECKRA1N_LOG_PATH=<FILE PATH>          Log to file
  CHECKRA1N_NO_COLORS=1                   Disable colors on the command line
  CHECKRA1N_PONGO=1                       Boots to a Pongo shell
  CHECKRA1N_QUICK=1                       Enable Quick Mode
  CHECKRA1N_SAFE_MODE=1                   Enter Safe-Mode
  CHECKRA1N_TUI=1                         Start a terminal graphical user interface
  CHECKRA1N_VERBOSE_BOOT=1                Verbose Boot
  CHECKRA1N_VERBOSE_LOGGING=1             Verbose logging

```

One intersing thing I tested is the [SandCastle](https://github.com/corellium/projectsandcastle) project, which is a project allow to write different Operating systems into iPhone 7/7s. Sadly, it was abandoned.

## Usage

*Please use learning and debugging, do not touch the edge!*

</br>

Open checkra1n, and connect your phone with **usb wire please**`do not use type-c. I was struggling with jailbreak on my m1 MacBook, and after I figured out type-c wire can't turn your device into DFU mode.`

Then it will turn your phone into recovery mode. If you are using a mac, please close the Finder(if so) and go back to the checkra1n. And next, turn your phone into DFU mode.

There will be instructions on the screen, if there is any problem, please use Google!

## Expand

*This is what I want to talk about today actually...*

Recently I found a project called [SandCastle](https://github.com/corellium/projectsandcastle), the project page is [here](https://projectsandcastle.org).

It can load Android, Linux and other systems into your iPhone. However, it only works best on iPhone 7/7s. I tried it and I successfully loaded Linux inside my iPhone 7s. There are many issues, please follow[ this](https://github.com/corellium/projectsandcastle/pull/41) instruction, and be mindful of the script inside.

After a struggle, I did the linux on my phone. However, the android was not successful. It both booted, but Android's nand file seems to have some problem when it starts loading. And I didn't test linux since it didn't start the GUI memu.

It was still interesting, using Checkra1n's pongo shell to do operations on the XNU kernel. Then I started to think that I should also add support on iOS for the Booking OS. One of the project ideas is to create a union hardware world, so if it is possible, I'll try...
