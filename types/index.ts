/* User role */
export type UserRoleType = "parent" | "guardian" | "teacher";

/* Students */
export type StudentType = {
	id: string;
	profile_id: string;
	created_at: string;
	avatar_path: string;
	dob: string;
};

/* Profile table */
export type ProfileType = {
	id: string;
	created_at: string;
	full_name: string;
	user_role: UserRoleType;
	signed_up: boolean;
	avatar_path: string;
	students: StudentType[] | null;
};
