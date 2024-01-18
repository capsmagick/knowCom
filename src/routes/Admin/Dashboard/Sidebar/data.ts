import Cube from "./Icons/cube.svelte";
export const data = [
	{
		section: 'Section 1',
		content: [
			{
				title: 'Dashboard',
				icon: Cube,
				link: '/Admin/Dashboard'
			},
			{
				title: 'Overview',
				icon: Cube,
				link: '/Admin/Dashboard/Overview'
			}
		]
	},
	{
		section: 'Section 2',
		content: [
			{
				title: 'Products',
				icon: Cube,
				link: '/Admin/Dashboard/Products'
			},
			{
				title: 'Categories',
				icon: Cube,
				link: '/Admin/Dashboard/Categories'
			},
			{
				title: 'Orders',
				icon: Cube,
				link: '/Admin/Dashboard/Orders'
			},
			{
				title: 'Customers',
				icon: Cube,
				link: '/Admin/Dashboard/Customers'
			}
		]
	},
	{
		section: 'Section 3',
		content: [
			{
				title: 'Reports',
				icon: Cube,
				link: '/admin/reports'
			},
			{
				title: 'Settings',
				icon: Cube,
				link: '/Admin/Dashboard/Settings'
			},
			{
				title: 'Documentation',
				icon: Cube,
				link: '/admin/documentation'
			}
		]
	}
];