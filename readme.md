# version

[![Build Status](https://travis-ci.org/callum/version.svg?branch=master)](https://travis-ci.org/callum/version)

Predictable file versioning

Managing files that change over time is tricky work. It’s common to want to maintain different versions of a file at once, but sadly this is far too familiar…

```
Proposal.txt
Proposal copy.txt
Proposal 2.txt
Proposals 2 copy.txt
Proposal 2 copy (William edits).txt
Proposal ROUND 3.txt
```

Even established naming conventions tend to fall flat due to human error. There’s surely a better way.

Version.app aims to make all of this more manageable by enforcing a simple and predictable naming convention that you can forget about.

Simply drop a file, say ‘Proposal.txt’ over the app icon to make a copy of it named Proposal_v001.txt in the same location. On further changes to Proposal.txt, drop it again to create another new version ‘Proposal_v002.txt’. Eventually;

```
Proposal.txt
Proposal_v001.txt
Proposal_v002.txt
Proposal_v003.txt
Proposal_v004.txt
Proposal_v004.txt
```

No matter which file you choose, the app will always determine the next available version for you and will never overwrite an exisiting one.

For a command-line alternative, see [https://github.com/callum/version-filename](version-filename)
