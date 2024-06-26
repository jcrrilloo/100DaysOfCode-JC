# Command Line & Terminal
## The 'Shell' :
- 'The Shell': provides a way to 'type' commands to  the computer for it to execute.
- With proper commands, you can ooptimize work flow by using the sheell to repeat tasks, including seaarching thousands of  files
- the command line:
* can launch programs that interact with files
* you can share code with other developers
* you can control the operating systems with 'command line interfaces' using ther `terminal`
* easily combines smaller tasks into larger, more powerful workflows

### Terminal Command Summary
*  cat -- for creating and displaying short files
* chmod --- changes permissions
* cd --- changes the directory
* cp --- for copying files
* date --- displaying the datee
* echo --- echo argument(used for printing text, variables, special characters etc)
* ftp --- connects to a remote machine to download or upload files
* grep --- searches for a file
* head --- displays first part of file
* ls --- see what files are in the working directory
* lpr --- standard print command
* more --- use to read  files
* mkdir --- creates a new directory
* mv --- for moving and renaming files
* ncftp --- good for downloading files via anonymous ftp
* print --- custom print command
* pwd --- displays current directory you are in
* rm --- removes a file
* rmdir --- removes a directory
* rsh --- remote shell
* setenv --- set an environment variable
* sort --- sort file
* tail --- display last part ofo file
* tar --- creat an archive, add oor extract files
* telnet --- loog in to another machine
* wc --- count characters, words, lines


## Moving Around Directories:
*** NOTE *** : `mkdir`, `mv`, `cp` and `rm` commands create, move, copy and remove files and/or directories
- `mkdir` : creates ( makes a directory)
- `mv`: moves files and directories from one directory to another or renames a file or directory
- `cp` : copies files and directories from one location to another
- `rm` : let's you delete a file or directory passing its name


## Working With Files & Directories:
- Use good names for files and directories
- don't use spaces
- don't begin the name with a - (dash)
- *** note *** : stick with letters, numbers, .(period or 'full stopo'), - (dash) and _(underscore)
- surround names of files or directories that have spaces or other special characters with ""(quotes)

## Creating a text file or a file
- `code`: "name" . "file" opens vscode and creates file
- `pwd` : will print out your current working directorry
- `rm` : removing a file should come with caution. the shell works different from the GUI( no trash bin available when you delete a file). when you delete a file, they are unlinked from the file system so that theirr storage space on disk can be recycled. If you `rm` it's gone forever....
`-i` : are  flags that you should use as best practice in `rm` process to have it prompt you to confirm that you really do want to remove the file.


## Wild Cards :
- `*` : is a wild card ... it matches 'zero' or 'more' characters.
- `?` : is also a wild card ... matches exactly one character
- *** note *** : wildcards can be used in combination with each other
