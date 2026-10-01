import { Avatar, Card, CardContent, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, MenuItem, Chip, TextField, } from '@mui/material'
import { Add, DeleteOutlined, EditOutlined, PersonOutlined, Search, VisibilityOutlined } from '@mui/icons-material'
import { useState, useMemo } from 'react'
import Navbar from '../components/Navbar'

export default function ActivityLogs() {
    const [search, setSearch] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')
    const [roleFilter, setRoleFilter] = useState('All')
    const [openAddUser, setOpenAddUser] = useState(false)

    const users = [
        {
            id: 1,
            userId: 'ADMIN-001',
            name: 'Admin User',
            email: 'admin@gmail.com',
            username: 'admin',
            role: 'Administrator',
            status: 'Active'
        },
        {
            id: 2,
            userId: 'ADMIN-001',
            name: 'Admin User',
            email: 'admin@gmail.com',
            username: 'admin',
            role: 'Administrator',
            status: 'Active'
        },
        {
            id: 3,
            userId: 'ADMIN-001',
            name: 'Admin User',
            email: 'admin@gmail.com',
            username: 'admin',
            role: 'Administrator',
            status: 'Active'
        },
        {
            id: 4,
            userId: 'ADMIN-001',
            name: 'Admin User',
            email: 'admin@gmail.com',
            username: 'admin',
            role: 'Administrator',
            status: 'Active'
        },
    ]

    const filteredUsers = useMemo(() => {
        const key = search.toLowerCase()
        return users.filter(user => {
            const matchesSearch =
                user.name.toLowerCase().includes(key) ||
                user.email.toLowerCase().includes(key) ||
                user.username.toLowerCase().includes(key) ||
                user.userId.toLowerCase().includes(key)

            const matchesRole =
                roleFilter === 'All' || user.role === roleFilter
            const matchesStatus =
                statusFilter === 'All' || user.action === statusFilter

            return matchesSearch && matchesRole && matchesStatus
        })
    }, [search, statusFilter, roleFilter])

    const initials = name =>
        name.replace('Prof', '').split(' ').map(word => word[0].join('').slice(0, 2).toUpperCase())

    const roleClass = role => {
        if (role === 'Administrator') return 'bg-purple-50 !text-purple-700'
        if (role === 'Instructor') return 'bg-blue-50 !text-blue-700'
        return '!bg-green-50 !text-green-700'
    }

    return (
        <>
            <Navbar />
            <div className='min-h-screen bg-slate-50'>
                <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7'>

                        <div>
                            <Typography variant='h4' className='!font-bold !text-slate-800'>
                                Activity Logs
                            </Typography>
                            <Typography variant='body2' className='!text-slate-500 !mt-1'>
                                Monitor user activity and important actions performed in the LMS
                            </Typography>
                        </div>


                        <Button
                            variant='contained'
                            startIcon={<Add />}
                            onClick={() => setOpenAddUser(true)}
                            className='!bg-blue-600 hover:!bg-blue-700 !normal-case !rounded-lg !shadow-none'
                        >
                            Add User
                        </Button>
                    </div>


                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
                        {[
                            ['Total Users', users.length],
                            ['Students', users.filter(user => user.role === 'Student').length,],
                            ['Instructors', users.filter(user => user.role === 'Instructor').length,],
                            ['Administrators', users.filter(user => user.role === 'Administrator').length,],
                        ].map(([label, value]) => (
                            <Card key={label} className='!rounded-xl !border !border-slate-200 !shadow-sm'>
                                <CardContent className='!p-5'>
                                    <Typography variant='body2' className='!text-slate-500'>
                                        {label}
                                    </Typography>
                                    <Typography variant='h4' className='!font-bold !text-slate-800 !mt-1'>
                                        {value}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </div>


                    <Card className='!rounded-xl !border !border-slate-200 !shadow-sm'>
                        <CardContent className='!p-0'>
                            <div className='grid grid-cols-1 lg:grid-cols-[1fr_220px_220px] gap-4 p-5 border-b border-slate-200'>
                                <TextField
                                    size='small'
                                    placeholder='Search name, username, email, or user ID...'
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    InputProps={{
                                        startAdornment: <Search className='!text-slate-400 !mr-2' />
                                    }}
                                />

                                <TextField
                                    select
                                    size='small'
                                    label='Role'
                                    value={roleFilter}
                                    onChange={(e) => setRoleFilter(e.target.value)}
                                >
                                    <MenuItem value='All'>All Roles</MenuItem>
                                    <MenuItem value='Administrator'>Administrator</MenuItem>
                                    <MenuItem value='Instructor'>Instructor</MenuItem>
                                    <MenuItem value='Student'>Student</MenuItem>
                                </TextField>


                                <TextField
                                    select
                                    size='small'
                                    label='Status'
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                >
                                    <MenuItem value='All'>All Status</MenuItem>
                                    <MenuItem value='Active'>Active</MenuItem>
                                    <MenuItem value='Inactive'>Inactive</MenuItem>
                                </TextField>
                            </div>

                            <div className='overflow-x-auto'>
                                <table className='w-full min-w-[1000px] text-sm'>
                                    <thead className='bg-slate-50 text-slate-500'>
                                        <tr>
                                            <th className='text-left font-semibold px-6 py-4'>User</th>
                                            <th className='text-left font-semibold px-6 py-4'>Username</th>
                                            <th className='text-left font-semibold px-6 py-4'>Role</th>
                                            <th className='text-left font-semibold px-6 py-4'>Status</th>
                                            <th className='text-right font-semibold px-6 py-4'>Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody className='divide-y divide-slate-100'>
                                        {filteredUsers.map(user => (
                                            <tr key={user.id} className='hover:bg-slate-50'>
                                                <td className='px-6 py-4'>
                                                    <div className='flex items-center gap-3'>
                                                        <Avatar className='!bg-blue-600'>
                                                            {initials(user.name)}
                                                        </Avatar>

                                                        <div>
                                                            <Typography className='!font-semibold !text-slate-800'>
                                                                {user.name}
                                                            </Typography>
                                                            <Typography variant='caption' className='!text-slate-500'>
                                                                {user.userId}
                                                            </Typography>
                                                            <Typography variant='caption' className='!text-slate-500'>
                                                                {user.email}
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className='px-6 py-4 text-slate-600'>
                                                    @{user.username}
                                                </td>

                                                <td className='px-6 py-4'>
                                                    <Chip
                                                        size='small'
                                                        label={user.role}
                                                        className={roleClass(user.role)}
                                                    />
                                                </td>

                                                <td className='px-6 py-4'>
                                                    <Chip
                                                        size='small'
                                                        label={user.status}
                                                        className={
                                                            user.status === 'Active'
                                                                ? '!bg-green-50 !text-green-700'
                                                                : '!bg-slate-100 !text-slate-600'
                                                        }
                                                    />
                                                </td>

                                                <td className='px-6 py-4'>
                                                    <div className='flex justify-end gap-1'>
                                                        <IconButton size='small' title='View'>
                                                            <VisibilityOutlined fontSize='small' />
                                                        </IconButton>
                                                        <IconButton size='small' title='Edit'>
                                                            <EditOutlined fontSize='small' />
                                                        </IconButton>
                                                        <IconButton size='small' color='error' title='Delete'>
                                                            <DeleteOutlined fontSize='small' />
                                                        </IconButton>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                {filteredUsers.length === 0 && (
                                    <div className='py-14 text-center'>
                                        <PersonOutlined className='!text-slate-300 !text-5xl' />
                                        <Typography variant='h6' className='!font-semibold !text-slate-700 !mt-3'>
                                            No users found
                                        </Typography>
                                        <Typography variant='body2' className='!text-slate-500 !mt-1'>
                                            Try changing your search or filters.
                                        </Typography>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </main >
            </div >

            <Dialog
                open={openAddUser}
                onClose={() => setOpenAddUser(false)}
                fullWidth
                maxWidth='sm'
            >
                <DialogTitle
                    className='!font-bold !text-slate-800'
                >
                    Add User
                </DialogTitle>

                <DialogContent>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2'>
                        <TextField fullWidth label='First Name' />
                        <TextField fullWidth label='Last Name' />
                        <TextField fullWidth label='Username' />
                        <TextField fullWidth label='Email Address' type='email' />

                        <TextField
                            select
                            fullWidth
                            label='Role'
                            defaultValue='Student'
                        >
                            <MenuItem value='Student'>Student</MenuItem>
                            <MenuItem value='Instructor'>Instructor</MenuItem>
                            <MenuItem value='Administrator'>Administrator</MenuItem>
                        </TextField>

                        <TextField
                            select
                            fullWidth
                            label='Status'
                            defaultValue='Active'
                        >
                            <MenuItem value='Active'>Active</MenuItem>
                            <MenuItem value='Inactive'>Inactive</MenuItem>
                        </TextField>
                    </div>
                </DialogContent>

                <DialogActions className='!px-6 !pb-5'>
                    <Button
                        onClick={() => setOpenAddUser(false)}
                        className='!normal-case !text-slate-600'
                    >
                        Cancel
                    </Button>

                    <Button
                        variant='contained'
                        onClick={() => setOpenAddUser(false)}
                        className='!bg-blue-600 hover:!bg-blue-700 !normal-case !rounded-lg !shadow-none'
                    >
                        Add User
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
