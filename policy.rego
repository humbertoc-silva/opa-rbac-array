package authz

import future.keywords.if

default allow := false

allow if {
	user := input.user
	permission := "permission_499"
	user_has_permission(user, permission)
}

user_has_permission(user, permission) if {
    [user, role, permission] = data.rbac.tuples[_]
}
