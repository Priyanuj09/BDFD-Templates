# Description
Removes all roles from a user.

Usage : ` !remove [User] `
- [] - Required

## Arguments

- User - Below are the valid method inputs

|       | Mention | User ID | Username |
| ----- | ------- | ------- | -------- |
| Slash |    ✓    |    ×    |    ×    |
| Guild |    ✓    |    ✓    |    ✓    |

## Slash Command

Do you want this command to work with slash? Then, replace ` SLASH_OPTION_NAME ` in code line 14 with your valid slash option name.

Note : While writing the slash option name, make sure all are in lowercase format.


Option Info

- Name : ` Your Choice `

- Type : ` User `

- Required : ` Yes `

## Limitations
- If you are having multiple clone roles, only one will be removed while the other won't. (If ` $userRoles[] ` returned IDs instead of names, this could have overcomed).

# Script Language
- ` BDScript 2 `

# Preview

https://user-images.githubusercontent.com/95774950/167270982-8a9140a5-e450-4858-89a8-370707c4b945.mp4
