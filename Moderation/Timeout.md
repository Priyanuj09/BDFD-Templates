# Timeout
Timeout an user for a specific duration.

Usage 
- This code requires BDScript 2 in order to work properly.
- This is a slash command.


- Type : `Guild`
- Options
   1. Type : User | Required : Yes
   2. Type : Text | Required : Yes
        - hdh

```
$nomention

$if[$checkUserPerms[$botID;moderatemembers]]
    $var[User;$message[user]]
    $var[Duration;$message[duration]]

    $if[$var[User]==$authorID]
        $ephemeral
        Self-timeout is not possible.
    $elseif[$var[User]==$serverOwner]
            $ephemeral
            Server owners cannot be timed out.
    $elseif[$var[User]==$botID]
            $ephemeral
            You cannot timeout me through my commands.
    $elseif[$rolePosition[$highestRole[$var[User]]]<$rolePosition[$highestRole[$authorID]]]
            $ephemeral
            You cannot timeout users whose roles are higher or equal to you.
    $elseif[$rolePosition[$highestRole[$var[User]]]<$rolePosition[$highestRole[$botID]]]
            $ephemeral
            My role isn't high enough to timeout users whose roles are higher or equal to me.
    $elseif[$isAdmin[$var[User]]]
            $ephemeral
            Timeout is not supported against users who have admin access.
    $else
         $timeout[$var[Duration];$var[User]]
         Successfully timed out [$username[$var[User]]#$discriminator[$var[User]]](<https://discord.com/users/$var[User]>) till <t:$sum[$getTimestamp;$replaceText[$message[duration];m;]]:F>
    $endif
$else
    $ephemeral
    In order to execute this command properly, i need **Timeout Members** permission.
$endif
```