# 如何使用 Git

浅浅的记录一下 </br>
如果要用 Mac 或者 Linux 安装教程自己搜索叭(我是将廖老师的教程拿来小小的总结 和 挑出我自己常用部分内容放在这里 详细内容链接里看原文吧 学习 git 教程:https://www.liaoxuefeng.com/wiki/896043488029600)

## 在 Windows 上安装 Git

- 在 Windows 上使用 Git，可以从 Git 官网直接下载安装程序，然后按默认选项安装即可。

- 安装完成后，在开始菜单里找到“Git”->“Git Bash”，蹦出一个类似命令行窗口的东西，就说明 Git 安装成功！

- 安装完成后，还需要最后一步设置，在命令行输入：

```powershell
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com
```

- 注意 git config 命令的--global 参数，用了这个参数，表示你这台机器上所有的 Git 仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和 Email 地址。

## 创建版本库

- 什么是版本库呢？版本库又名仓库，英文名 _**repository**_ ，你可以简单理解成一个目录，这个目录里面的所有文件都可以被 Git 管理起来，每个文件的修改、删除，Git 都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。

- 第一步 ，创建一个版本库非常简单，首先，选择一个合适的地方，创建一个空目录：

```powershell
$ mkdir GitRepository
$ cd GitRepository
$ pwd

/d/GitRepository
```

- `pwd` 命令用于显示当前目录。在我的 windows 上，这个仓库位于 `/d/GitRepository`

- ## 注意!!!!

  > 如果使用 Windows 系统，为了避免遇到各种莫名其妙的问题，请确保目录名（包括父目录）不包含中文。

- 第二步，通过`git init`命令把这个目录变成 Git 可以管理的仓库：

```powershell
$ git init
```

- 这个目录是 Git 来跟踪管理版本库的，没事千万不要手动修改这个目录里面的文件，不然改乱了，就把 Git 仓库给破坏了。  
  如果你没有看到`.git`目录，那是因为这个目录默认是隐藏的，用`ls -ah`命令就可以看见。

## 把文件添加到版本库

> 第一步
>
> - 将文件(readme.txt)放到 `GitRepository`目录下（子目录也行）因为这是一个 Git 仓库，放到其他地方 Git 再厉害也找不到这个文件。
>
> 第二步
>
> - 用命令`git add`告诉 Git，把文件添加到仓库:

```powershell
$ git add readme.txt
```

> 执行上面的命令，没有任何显示，这就对了，Unix 的哲学是“没有消息就是好消息”，说明添加成功
>
> 第三步
>
> - 用命令 git commit 告诉 Git，把文件提交到仓库：

```powershell
$ git commit -m "wrote a readme file"
```

> 简单解释一下`git commit`命令，`-m`后面输入的是本次提交的说明，可以输入任意内容，当然最好是有意义的，这样你就能从历史记录里方便地找到改动记录。
>
> ## 为什么 Git 添加文件需要`add`，`commit`一共两步呢？
>
> - 因为`commit`可以一次提交很多文件，所以你可以多次`add`不同的文件

## 开始编辑修改

- 要随时掌握工作区的状态，使用`git status`命令。

- 如果`git status`告诉你有文件被修改过，用`git diff`可以查看修改内容

> 运行 `git status`

```
$ git status


On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   readme.txt

no changes added to commit (use "git add" and/or "git commit -a")

//上面的命令输出告诉我们，readme.txt被修改过了，但还没有准备提交的修改
```

> 运行 `git diff`查看修改内容

```powershell
$ git diff readme.txt

diff --git a/readme.txt b/readme.txt
index cbe280a..dd48a88 100644
--- a/readme.txt
+++ b/readme.txt
@@ -1 +1,3 @@
-Tips for Git
\ No newline at end of file
+Tips for Git
+
+try diff
\ No newline at end of file
```

> 知道了对`readme.txt`作了什么修改后，再把它提交到仓库就放心多了，提交修改和提交新文件是一样的两步，第一步是`git add` 同样没有任何输出

> 在执行第二步`git commit`之前，我们再运行`git status`看看当前仓库的状态：

```powershell
$ git status

On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   readme.txt
```

> `git status`告诉我们，将要被提交的修改包括`readme.txt`，下一步，就可以放心地提交了

```powershell
$ git commit readme.txt -m "added a sentence "

```

> 提交后，我们再用`git status`命令看看仓库的当前状态:

```powershell
$ git status
On branch master
nothing to commit, working tree clean
```

# 添加远程仓库

> 1.登陆 GitHub，然后，在右上角找到“Create a new repo”按钮，创建一个新的仓库

> 2.在 GitHub 上的这个新建的仓库还是空的，GitHub 告诉我们，可以从这个仓库克隆出新的仓库，也可以把一个已有的本地仓库与之关联，然后，把本地仓库的内容推送到 Gi0tHub 仓库。

> 3.根据 GitHub 的提示，在本地的 仓库下运行命令

```powershell
$ git remote add origin git@github.com:AkparAby/Learn-WEB.git
git branch -M main
git push -u origin main
```

> 添加后，远程库的名字就是`origin`，这是 Git 默认的叫法，也可以改成别的，但是 origin 这个名字一看就知道是远程库。

> 由于远程库是空的，我们第一次推送`master`分支时，加上了`-u`参数，Git 不但会把本地的`master`分支内容推送的远程新的`master`分支，还会把本地的`master`分支和远程的`master`分支关联起来，在以后的推送或者拉取时就可以简化命令。

### 从现在起，只要本地作了提交，就可以通过命令

```powershell
$ git push origin
```

### 把本地 master 分支的最新修改推送至 GitHub，现在，你就拥有了真正的分布式版本库！

## 删除远程库

> - 如果添加的时候地址写错了，或者就是想删除远程库，可以用`git remote rm <name>`命令。使用前，建议先用`git remote -v`查看远程库信息,然后，根据名字删除
>
> - 此处的“删除”其实是解除了本地和远程的绑定关系，并不是物理上删除了远程库。远程库本身并没有任何改动。要真正删除远程库，需要登录到 GitHub，在后台页面找到删除按钮再删除。

# 从远程库克隆

- 如果远程库已经准备好了，下一步是用命令`git clone`克隆一个本地库:

```powershell
$ git clone git@github.com:AkparAby/Learn-WEB.git
```

- 要克隆一个仓库，首先必须知道仓库的地址，然后使用`git clone`命令克隆
