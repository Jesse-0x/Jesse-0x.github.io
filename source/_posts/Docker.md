---
title: Docker
comments: true
math: true
quicklink: true
top_image: https://www.docker.com/sites/default/files/d8/2019-07/horizontal-logo-monochromatic-white.png
date: 2020-11-04 11:52:07
categories:
     - [Technology, LXC]
     - [Operating System, Linux]
     - [Program Develope, Environment]
     - [Tools, Docker]
tags:
     - Experience & Guide
     - Resource & Share
---

# Docker

A good solution toward developement

<!-- more -->
![image](https://www.docker.com/sites/default/files/d8/2019-07/horizontal-logo-monochromatic-white.png)
Many people said Docker gonna change the world since 2013 it realse, but what it actually helped?

## 0x01 Develop

### Environment

One big problem for develop is environment congifuration. Every computer uses' environment is different. If the program can run under this environment, we can't sure it will run under another enviroment. 

Must make sure the operating system's setting and different library's install. For example, in order to run a python program, user must have python engine, and different dependinces. It is also takes time, require update, diffcult, and other bunch of different problems.

### Virtual Machine

So Virtual Machine is a solution to instill with environment. It allows to run a OS inside another os. Such as run Windows in mac. Facing to the OS, virtual Machine is a normal file, not gonna effect any thing.

**However,** it require much much more resource than actually the program needed. Because a OS also running other programs. Also other OS level steps can't skip, e.g login. take long time to boot, large disk file...

### LXC(Linux Containers)

Cause Virtual Machine's problems, Linux developed Linux Containers. It is **not a full operating system**, it is more like a protection. Quarting the process to the program. Since the Containers is a process, it boot faster, not require many resource, small size, and more.

It is like a lite Virtual Machine can provide Virtual environment with less requirement.

## 0x02 Docker

Docker is a package for Linux Containers, it provide more easy API to the Containers, and the most popular solution for LXC.

Docker is verrrry easy to use, run and control. And a docker image is also easy to duplicate, share, edit and manage, just like a code.

### Installation

You can follow the instruction [here](https://www.docker.com/get-started)

I installed docker with brew

```bash
brew install homebrew/cask/docker
```

### Usage

```
Usage:  docker [OPTIONS] COMMAND

A self-sufficient runtime for containers

Options:
      --config string      Location of client config files (default
                           "/Users/jesse/.docker")
  -c, --context string     Name of the context to use to connect to the
                           daemon (overrides DOCKER_HOST env var and
                           default context set with "docker context use")
  -D, --debug              Enable debug mode
  -H, --host list          Daemon socket(s) to connect to
  -l, --log-level string   Set the logging level
                           ("debug"|"info"|"warn"|"error"|"fatal")
                           (default "info")
      --tls                Use TLS; implied by --tlsverify
      --tlscacert string   Trust certs signed only by this CA (default
                           "/Users/jesse/.docker/ca.pem")
      --tlscert string     Path to TLS certificate file (default
                           "/Users/jesse/.docker/cert.pem")
      --tlskey string      Path to TLS key file (default
                           "/Users/jesse/.docker/key.pem")
      --tlsverify          Use TLS and verify the remote
  -v, --version            Print version information and quit

Management Commands:
  builder     Manage builds
  buildx*     Docker Buildx (Docker Inc., v0.7.1)
  compose*    Docker Compose (Docker Inc., v2.2.1)
  config      Manage Docker configs
  container   Manage containers
  context     Manage contexts
  image       Manage images
  manifest    Manage Docker image manifests and manifest lists
  network     Manage networks
  node        Manage Swarm nodes
  plugin      Manage plugins
  scan*       Docker Scan (Docker Inc., v0.14.0)
  secret      Manage Docker secrets
  service     Manage services
  stack       Manage Docker stacks
  swarm       Manage Swarm
  system      Manage Docker
  trust       Manage trust on Docker images
  volume      Manage volumes

Commands:
  attach      Attach local standard input, output, and error streams to a running container
  build       Build an image from a Dockerfile
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container's filesystem
  events      Get real time events from the server
  exec        Run a command in a running container
  export      Export a container's filesystem as a tar archive
  history     Show the history of an image
  images      List images
  import      Import the contents from a tarball to create a filesystem image
  info        Display system-wide information
  inspect     Return low-level information on Docker objects
  kill        Kill one or more running containers
  load        Load an image from a tar archive or STDIN
  login       Log in to a Docker registry
  logout      Log out from a Docker registry
  logs        Fetch the logs of a container
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  ps          List containers
  pull        Pull an image or a repository from a registry
  push        Push an image or a repository to a registry
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  rmi         Remove one or more images
  run         Run a command in a new container
  save        Save one or more images to a tar archive (streamed to STDOUT by default)
  search      Search the Docker Hub for images
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  version     Show the Docker version information
  wait        Block until one or more containers stop, then print their exit codes

Run 'docker COMMAND --help' for more information on a command.

To get more help with docker, check out our guides at https://docs.docker.com/go/guides/

```

some common command:

```bash
docker pull ubuntu:20.04 #pull ubuntu image LTS20.04
```

More image can be fount at [here](https://hub.docker.com)

```bash
docker run -it ubuntu /bin/bash #run bash on the ubuntu image you just pulled
```

-i: interactive

-t: terminal

-d: run in backstage

/bin/bash: command you want to run

```bash
$ exit
```

if you want to exit the image, type in exit.

```bash
docker ps #all the containers
docker start 123456abcd #start stopped image 123456abcd
docker stop 123456abcd #stop image 123456abcd
docker restart 123456abcd #restart 123456abcd
docker exec 123456abcd #attach to an image run in backstage(-d)
docker export 123456abcd #export 123456abcd
docker rm 123456abcd #remove an container
docker images #list all the images
```

## 0x03

### Dockerfile

Development in docker can use `Dockerfile` to create an image.

```
FROM ubuntu:20.04 #means the image build on
COPY . /app       #Copy current folder in to image /app
WORKDIR /app			#set work inside /app, like cd /app
RUN apt update		#run command inside image
EXPOSE 1234				#expose port 1234, allow outside to connect the 1234 port inside a docker.
```

### Build

And now can build the image use `docker image build .`

And now use `docker image ls` to see the image you just build. 

### Run

run with `docker container run`

```bash
docker container run -p 1234:1234 -it ubuntu /bin/bash
```

-i: interactive

-t: terminal

-p: port to reflect

-d: run in backstage

/bin/bash: command you want to run

### Stop

Now you can use `ctrl + d` or type in exit to exit the container.

You also can use `docker container kill` to kill the container.

ps: if you stopped the container, it will not be remove, please use `docker container rm <containerID>` to remove it( I like to use `docker container rm $(docker container ls -a -q)` to remove every container)



