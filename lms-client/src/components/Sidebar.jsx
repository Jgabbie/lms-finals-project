
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Avatar, Divider, Button } from '@mui/material'
import { Dashboard, People, MenuBook, School, Assignment, Person, Settings, Logout } from '@mui/icons-material'

export default function Sidebar() {

    const mainMenu = [
        {
            label: 'Dashboard',
            icon: <Dashboard />,
            path: 'admin/dashboard'
        },
        {
            label: 'Users',
            icon: <People />,
            path: 'admin/dashboard'
        },
        {
            label: 'Courses',
            icon: <MenuBook />,
            path: 'admin/dashboard'
        },
        {
            label: 'Instructors',
            icon: <School />,
            path: 'admin/dashboard'
        },
        {
            label: 'Assignments',
            icon: <Assignment />,
            path: 'admin/dashboard'
        },
    ]

    const accountMenu = [
        {
            label: 'Profile',
            icon: <Person />,
            path: 'admin/dashboard'
        },
        {
            label: 'Settings',
            icon: <Settings />,
            path: 'admin/dashboard'
        },
    ]


    return (
        <Drawer variant='permanent' anchor='left' sx={{ width: 260, flexShrink: 0, '& .MuiDrawer-paper': { width: 260, boxSizing: 'border-box', borderRight: '1px solid #e2e8f0', backgroundColor: '#ffffff' }, }}>
            <div className='h-20 flex items-center px-6'>
                <div>
                    <Typography variant='h6' className='!font-bold !text-blue-600'>
                        EduLearn
                    </Typography>

                    <Typography variant='caption' className='!text-slate-400'>
                        Learning Management System
                    </Typography>
                </div>
            </div>

            <Divider />
            <div>
                <Typography variant='caption' className='!px-3 !font-semibold !text-slate-400 !uppercase !tracking-wider'>
                    Main Menu
                </Typography>

                <List>
                    {mainMenu.map((item) => (
                        <ListItem key={item.label} disablePadding className='!mb-1'>
                            <ListItemButton component='a' href={item.path} selected={item.label === 'Dashboard'} sx={{
                                borderRadius: '8px', minHeight: 46,
                                '&.Mui-selected': {
                                    backgroundColor: '#eff6ff',
                                    color: '#2563eb',
                                },
                                '&.Mui-selected:hover': {
                                    backgroundColor: '#dbeafe',
                                },
                            }}>
                                <ListItemIcon sx={{ minWidth: 40, color: item.label === "Dashboard" ? '#2563eb' : "#64748b" }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <Typography variant='caption' className='!px-3 !font-semibold !text-slate-400 !uppercase !tracking-wider'>
                    Account
                </Typography>

                <List>
                    {accountMenu.map((item) => (
                        <ListItem key={item.label} disablePadding className='!mb-1'>
                            <ListItemButton component='a' href={item.path} selected={item.label === 'Dashboard'} sx={{ borderRadius: '8px', minHeight: 46, }}>
                                <ListItemIcon sx={{ minWidth: 40, color: "#64748b" }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.label} primaryTyporgraphyProps={{ fontSize: 14, fontWeight: 500 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </div>

            <Divider />

            <div className='p-4'>
                <div className='flex items-center gap-3 mb-3'>
                    <Avatar className='!bg-blue-600'>
                        A
                    </Avatar>

                    <div>
                        <Typography variant='body2' className='!font-semibold !text-slate-700 !truncate'>
                            Admin User
                        </Typography>

                        <Typography variant='caption' className='text-slate-400 !block !truncate'>
                            Administrator
                        </Typography>
                    </div>
                </div>

                <Button fullWidth startIcon={<Logout />} className='!justify-start !normal-case !text-slate-500 hover:!bg-red-50 hover:!text-red-600 !rounded-lg'>
                    Logout
                </Button>
            </div>
        </Drawer>
    )
}
