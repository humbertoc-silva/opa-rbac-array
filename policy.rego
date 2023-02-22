package authz

import future.keywords.if

default allow := false

allow if {
    user := input.user
    permission := "print_something"
    user_has_permission(user, permission)
}

user_has_permission(user, permission) := true if {
    [user, role, permission] = data.rbac.tuples[_]
}