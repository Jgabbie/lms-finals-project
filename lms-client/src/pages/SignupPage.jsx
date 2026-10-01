import { TextField, Button, Checkbox, FormControlLabel, Typography, Link, InputAdornment, IconButton, Modal, Snackbar, Alert } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { useState } from 'react'


export default function SignupPage() {

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [showTermsAndConds, setShowTermsAndConds] = useState(false)
    const [termsAndCondsAccepted, setTermsAndCondsAccepted] = useState(false)
    const [notification, setNotification] = useState({
        open: false,
        message: "",
        severity: "success"
    })


    const showNotification = (message, severity = "success") => {
        setNotification({
            open: true,
            message,
            severity
        })
    }

    const closeNotification = () => {
        setNotification((prev => ({
            ...prev,
            open: false
        })))
    }


    //submit signup
    const handleSubmit = (e) => {
        e.preventDefault()
        showNotification("Signup Attempted!", "success")
    }

    //open terms and conditions modal
    const openTermsAndCondsModal = () => {
        setShowTermsAndConds(true)
    }

    //close terms and conditions modal
    const closeTermsAndCondsModal = () => {
        setShowTermsAndConds(false)
    }

    //agree to terms and conds
    const agreeToTermsAndConds = () => {
        setTermsAndCondsAccepted(true)
        setShowTermsAndConds(false)
        showNotification("You have agreed with the Terms and Conditions of EduLearn", "success")
    }

    return (
        <>
            <div className='relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 px-4'>

                <div className='absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-200/60 ' />
                <div className='absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-indigo-200/60 ' />
                <div className='absolute top-1/3 -right-20 w-64 h-64 rounded-full bg-blue-200/60 ' />

                <div className='relative max-w-md w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-10'>
                    <div className='text-center mb-8'>
                        <Typography variant='h5' className='font-bold text-blue-600 tracking-wide mb-2'>
                            EduLearn LMS
                        </Typography>
                        <Typography variant='h5' className='font-bold text-slate-800'>
                            Welcome New User
                        </Typography>
                        <Typography variant='body2' className='text-slate-500 mt-2'>
                            Please enter required details to sign up.
                        </Typography>
                    </div>

                    <form className='flex flex-col gap-5' onSubmit={handleSubmit}>

                        {/* firstname and lastname */}
                        <div className='flex flex-row gap-3'>
                            <TextField label="First Name" type='text' variant='outlined' fullWidth required />
                            <TextField label="Last Name" type='text' variant='outlined' fullWidth required />
                        </div>


                        {/* email address */}
                        <TextField label="Email Address" type='email' variant='outlined' fullWidth required />


                        {/* if adding any type of customization like eye icons for password use "slotProps" */}
                        {/* if customizing styles of MUI components, use "sx" */}
                        <TextField
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            variant='outlined'
                            fullWidth
                            required
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton onClick={() => { setShowPassword(!showPassword) }} edge="end">
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }
                            }}
                        />

                        <TextField
                            label="Confirm Password"
                            type={showConfirmPassword ? "text" : "password"}
                            variant='outlined'
                            fullWidth
                            required
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton onClick={() => { setShowConfirmPassword(!showConfirmPassword) }} edge="end">
                                                {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }
                            }}
                        />



                        <div className='flex items-center justify-between -mt-2'>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size='small'
                                        className='text-blue-600'
                                        checked={termsAndCondsAccepted}
                                        onChange={(e) => setTermsAndCondsAccepted(e.target.checked)}
                                    />}
                                label={
                                    <Typography variant='body2' className='text-slate-600'>Agree with the
                                        <Link onClick={openTermsAndCondsModal} underline='hover' className='!ml-1 text-blue-600 font-bold cursor-pointer'>
                                            Terms and Conditions
                                        </Link>
                                    </Typography>
                                }
                            />
                        </div>

                        <Button type='submit' variant='contained' size='large' className='bg-blue-600 hover:bg-blue-700 normal-case shadow-none rounded-lg py-3 mt-2 text-base font-medium'>
                            Create Account
                        </Button>
                    </form>

                    <div className='mt-8 text-center'>
                        <Typography variant='body2' className='text-slate-600'>
                            Already have an account?

                            <Link href="/login" underline='hover' className='!ml-4 text-blue-600 font-bold cursor-pointer'>
                                Login here
                            </Link>
                        </Typography>
                    </div>
                </div>
            </div>


            {/* terms and conditions modal */}
            <Modal
                open={showTermsAndConds}
                onClose={closeTermsAndCondsModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='flex items-center justify-center p-4'
            >
                <div className='relative max-w-3xl w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-2 sm:p-10'>
                    <div className='text-center'>
                        <Typography variant='h5' className='font-bold text-blue-600 tracking-wide mb-2'>
                            Welcome to EduLearn LMS
                        </Typography>
                        <Typography variant='h5' className='font-bold text-slate-800'>
                            Terms and Conditions
                        </Typography>
                        <Typography variant='caption' className='text-slate-500 mt-2'>
                            Kindly carefully read the terms and conditions
                        </Typography>

                        <div className='text-justify mt-4 '>
                            <div className='mb-4'>
                                <Typography variant='body2' className='text-slate-500 mt-2'>
                                    LOGGING IN AND SIGNING UP
                                </Typography>
                                <Typography variant='caption' className='text-slate-500 mt-2'>
                                    Kindly carefully read the terms and conditions
                                </Typography>
                            </div>

                            <div className='mb-4'>
                                <Typography variant='body2' className='text-slate-500 mt-2'>
                                    LOGGING IN AND SIGNING UP
                                </Typography>
                                <Typography variant='caption' className='text-slate-500 mt-2'>
                                    Kindly carefully read the terms and conditions
                                </Typography>
                            </div>

                            <div className='mb-4'>
                                <Typography variant='body2' className='text-slate-500 mt-2'>
                                    LOGGING IN AND SIGNING UP
                                </Typography>
                                <Typography variant='caption' className='text-slate-500 mt-2'>
                                    Kindly carefully read the terms and conditions
                                </Typography>
                            </div>
                        </div>

                        <div className='flex justify-end'>
                            <Button onClick={agreeToTermsAndConds} variant='contained' size='large' className='bg-blue-600 hover:bg-blue-700 normal-case shadow-none rounded-lg py-3 mt-2 text-base font-medium'>
                                I Agree
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>


            <Snackbar
                open={notification.open}
                autoHideDuration={3000}
                onClose={closeNotification}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
            >
                <Alert
                    onClose={closeNotification}
                    severity={notification.severity}
                    variant='filled'
                    sx={{ width: "100%" }}
                >
                    {notification.message}
                </Alert>
            </Snackbar>

        </>
    )
}
