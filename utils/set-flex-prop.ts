/*
	Flex shortcuts.
	'css' → {
		flexDirection: 'column',
		justifyContent: 'start',
		alignItems: 'start'
	}
*/

type Keys = {
	[rest: string]: {
		[rest: string]: string;
	};
};

export const setFlexGroup = (flexes: string | null | undefined): {} | null => {
	if (!flexes) return null;

	const keys: Keys = {
		dir: {
			r: "row",
			c: "column",
		},
		align: {
			s: "flex-start",
			b: "space-between",
			c: "center",
			e: "flex-end",
		},
	};

	const setFlexes = (arr: string) => {
		return {
			flexDirection: keys.dir[arr[0]],
			justifyContent: keys.align[arr[1]],
			alignItems: keys.align[arr[2]],
		};
	};
	return setFlexes(flexes);
};
