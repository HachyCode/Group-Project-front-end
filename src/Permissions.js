export const OkOrder = 1;
export const RaiseOrder = 2;
export const SeeAllSuppliers = 4;
export const SeeProductsStaffAuthedToOrder = 8;
export const SeeActivePOs = 16;

export function hasPermission(userPermissions, permissionFlag) {
	return (userPermissions & permissionFlag) === permissionFlag;
}

export function addPermissions(userPermissions, ...permissionFlags) {
	let permissions = userPermissions;
	
	for (const flag of permissionFlags) {
		permissions |= flag;
	}

	return permissions;
}