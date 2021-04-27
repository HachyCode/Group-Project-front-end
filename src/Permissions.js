export const OkOrder = 1;
export const RaiseOrder = 2;
export const SeeAllSuppliers = 4;
export const SeeProductsStaffAuthedToOrder = 8;
export const SeeActivePOs = 16;
export const JohnOk = 32;
export const AnnOk = 64;

export function hasPermission(userPermissions, permissionFlag) {
	return (userPermissions & permissionFlag) === permissionFlag;
}

export function hasAnyPermissions(userPermissions, ...permissionFlags) {
	for (const flag of permissionFlags) {
		if (hasPermission(userPermissions, flag)) {
			return true;
		}
	}

	return false;
}

export function addPermissions(userPermissions, ...permissionFlags) {
	let permissions = userPermissions;

	for (const flag of permissionFlags) {
		permissions |= flag;
	}

	return permissions;
}