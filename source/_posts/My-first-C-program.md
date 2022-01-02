---
title: My first C program
comments: true
math: true
quicklink: true
date: 2019-11-10 21:46:32
excerpt: My first C program & note
categories:
  - [Programing Language, C]
tags:
  - Experience & Guide
---

<!-- more -->

### 1-1 basic C info

1. Every C language needs to have a **main()** function. Program begins with **main()** .

2. **/\* \*/** use a description program.
3. **printf()** used to print to the screen . **printf()** will in the stdio.h header file say.
4. **stdio.h** is a header file (Standard input and output header file), **#include** is a Preprocessing command,used in get in the header file.When translated meet **printf()** function,if do not find **stdio.h** header file ,it will have translated wrong.
5. **return 0;** use to get out of the program.

#### Code

main()

/*  */

printf()

stdio.h

\#include —— #include <stdio.h>

return 0;

#### Program

```c
#include <stdio.h>

int main(){
  /* My first C program */
  printf("Hello, World! \n");
  return 0;
}
```

