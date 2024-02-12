// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Slide from '@mui/material/Slide';
// import { TransitionProps } from '@mui/material/transitions';
// import { forwardRef } from 'react';
// import PaymentForm from './PaymentForm';
// import SharedContext from './SharedContext';
// import { useNavigate } from 'react-router-dom';
// import { GetCookie, addPaymentDetails, deleteCourse, registerToCourse } from '../api/api';
import InsetDividers from './InsetDividers ';
// import Alert from '@mui/material/Alert';
// import BootstrapDialogTitle from './BootstrapDialogTitle';
// import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';


// const Transition = forwardRef(function Transition(
//   props: TransitionProps & {
//     children: React.ReactElement<any, any>;
//   },
//   ref: React.Ref<unknown>,
// ) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function AlertDialogSlide(props: any) {
//   const [showPayment, setShowPayment] = useState(false);
//   const [totalSum, setTotalSum] = useState(props.prop.price);
//   const [nameCard, setNameCard] = useState('');
//   const [cardNumber, setCardNumber] = useState('');
//   const [expDate, setExpDate] = useState(new Date());
//   const [cvv, setCvv] = useState('');
//   const [rememberDetails, setRememberDetails] = useState(false);
//   const [duration, setDuration] = useState('');
//   const [useStorageCreditDetails, setUseStorageCreditDetails] = useState(false);
//   const [storageCreditDetails, setStorageCreditDetails] = useState(0);
//   const [enrollment, setEnrollment] = useState('');

//   const nav = useNavigate();

//   const handleClose = () => {
//     props.onClose();
//   };

//   const handlePayment = async () => {
//     if (rememberDetails) {
//       const resStatus = await addPaymentDetails(nameCard, cardNumber, expDate, cvv);
//       switch (resStatus) {
//         case 201:
//           // Handle success
//           break;
//         case 401:
//           nav('/sign-in');
//           break;
//         case 409:
//           // Handle conflict error
//           break;
//         default:
//           // Handle other error cases
//           break;
//       }
//     }
//     const res = await registerToCourse(props.prop._id);



//     switch (res) {
//       case 201:
//         setEnrollment('success')
//         break;
//       case 409:
//         setEnrollment('conflict');
//         break;
//       case 400:
//         setEnrollment('full');
//         break;
//       case 404:
//         setEnrollment('not found');
//         break;
//       default:
//         break;
//     }

//   };

//   const handleRegister = () => {
//     setShowPayment(true);
//   };

//   const handleDelete = async (id: string) => {
//     const res = await deleteCourse(id);
//     if (res == 200)
//       //i want to display here this:
// //       import * as React from 'react';
// // import Button from '@mui/material/Button';
// // import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';

// // function MyApp() {
// //   const { enqueueSnackbar } = useSnackbar();
// //   const handleClickVariant = (variant: VariantType) => () => {
// //     // variant could be success, error, warning, info, or default
// //     enqueueSnackbar('This is a success message!', { variant });
// //   };
// //   handleClickVariant('ss');

// //   return (
// //     <React.Fragment>
// //      <Button onClick={handleClickVariant('success')}>Show success snackbar</Button>
// //     </React.Fragment>
// //   );
// // }

// // export default function IntegrationNotistack() {
// //   return (
// //     <SnackbarProvider maxSnack={3}>
// //       <MyApp />
// //     </SnackbarProvider>
// //   );
// // }
//       console.log(res);
//   }

//   const [open, setOpen] = React.useState(false);

// const handleClick = () => {
//   setOpen(true);
// };
//   const handleClose2 = (_event: React.SyntheticEvent | Event, reason?: string) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     setOpen(false);
//   };

//   const action = (
//     <React.Fragment>
//       <Button color="secondary" size="small" onClick={() => handleDelete(props.prop._id)}>
//         delete permanently
//       </Button>
//       <IconButton
//         size="small"
//         aria-label="close"
//         color="inherit"
//         onClick={handleClose2}
//       >
//         <CloseIcon fontSize="small" />
//       </IconButton>
//     </React.Fragment>
//   );

//   // console.log(props.prop.StartDate > D);

//   return (
//     <div>
//       <Dialog
//         open={true}
//         TransitionComponent={Transition}
//         keepMounted
//         onClose={handleClose}
//         aria-describedby="alert-dialog-slide-description"
//       >
//         <DialogTitle>{props.prop.courseType}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-slide-description">
//             {enrollment === '' ? ( // Use the enrollment state to conditionally render the PaymentForm or the Alert
//               !showPayment ? (
//                 <InsetDividers data={props.prop} />
//               ) : (
//                 <SharedContext.Provider
//                   value={{
//                     totalSum,
//                     setTotalSum,
//                     nameCard,
//                     setNameCard,
//                     cardNumber,
//                     setCardNumber,
//                     expDate,
//                     setExpDate,
//                     cvv,
//                     setCvv,
//                     rememberDetails,
//                     setRememberDetails,
//                     duration,
//                     setDuration,
//                     useStorageCreditDetails,
//                     setUseStorageCreditDetails,
//                     storageCreditDetails,
//                     setStorageCreditDetails,
//                   }}
//                 >
//                   <PaymentForm />
//                 </SharedContext.Provider>
//               )
//             ) : enrollment === 'success' ? (
//               <Alert severity="success">You register to the course succesfully!</Alert>
//             ) : enrollment === 'conflict' ? <Alert severity="warning">You have already register to this course!</Alert>
//               : enrollment === 'full' ? <Alert severity="info">The course is full! please try again!</Alert> : <Alert severity="error">Failed</Alert>}
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Close</Button>
//           {(new Date(props.prop.StartDate) > new Date())
//             && <Button onClick={handleClick}>Delete</Button>}
//           <Snackbar
//             open={open}
//             autoHideDuration={6000}
//             onClose={handleClose}
//             message="Warning!"
//             action={action}
//           />
//           {showPayment && enrollment === '' ? <Button onClick={handlePayment}
//             disabled={(!useStorageCreditDetails) && (nameCard === '' || cardNumber.length < 16 ||
//               expDate === new Date() || cvv.length < 3)}>
//             Pay</Button>
//             : enrollment === '' ? GetCookie() ? props.show === true && <Button onClick={handleRegister}>For Registration</Button> : <BootstrapDialogTitle /> : null}
//         </DialogActions>
//       </Dialog>
//     </div >
//   );
// }

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef } from 'react';
import PaymentForm from './PaymentForm';
import SharedContext from './SharedContext';
import { useNavigate } from 'react-router-dom';
import { GetCookie, addPaymentDetails, deleteCourse, registerToCourse } from '../api/api';
// import InsetDividers from './InsetDividers';
import Alert from '@mui/material/Alert';
import BootstrapDialogTitle from './BootstrapDialogTitle';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props: any) {
  const [showPayment, setShowPayment] = useState(false);
  const [totalSum, setTotalSum] = useState(props.prop.price);
  const [nameCard, setNameCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState(new Date());
  const [cvv, setCvv] = useState('');
  const [rememberDetails, setRememberDetails] = useState(false);
  const [duration, setDuration] = useState('');
  const [useStorageCreditDetails, setUseStorageCreditDetails] = useState(false);
  const [storageCreditDetails, setStorageCreditDetails] = useState(0);
  const [enrollment, setEnrollment] = useState('');
  const [openDeleted, setOpenDeleted] = useState(false);
  const [open, setOpen] = useState(false);
  const [successDelete, setSuccessDelete] = useState("Try Later...:(");
  const nav = useNavigate();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.onClose();
  };

  const handlePayment = async () => {
    if (rememberDetails) {
      const resStatus = await addPaymentDetails(nameCard, cardNumber, expDate, cvv);
      switch (resStatus) {
        case 201:
          // Handle success
          break;
        case 401:
          nav('/sign-in');
          break;
        case 409:
          // Handle conflict error
          break;
        default:
          // Handle other error cases
          break;
      }
    }
    const res = await registerToCourse(props.prop._id);
    switch (res) {
      case 201:
        setEnrollment('success')
        break;
      case 409:
        setEnrollment('conflict');
        break;
      case 400:
        setEnrollment('full');
        break;
      case 404:
        setEnrollment('not found');
        break;
      default:
        break;
    }
  };


  const handleRegister = () => {
    setShowPayment(true);
  };

  const handleDelete = async (id: any) => {
    console.log(id);

    const res = await deleteCourse(id);
    setOpen(false);
    setOpenDeleted(true);
    if (res == 200) {
      setSuccessDelete("The course deleted Successfully!");
    }
    console.log(res);
  }

  const action = (

    <React.Fragment>
      <Button color="secondary" size="small" onClick={() => handleDelete(props.prop._id)}>
        delete permanently
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose} // Close the Snackbar when clicked on the close icon
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Dialog
        open={true}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{props.prop.courseType}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {enrollment === '' ? (
              !showPayment ? (
                <InsetDividers data={props.prop} />
              ) : (
                <SharedContext.Provider
                  value={{
                    totalSum,
                    setTotalSum,
                    nameCard,
                    setNameCard,
                    cardNumber,
                    setCardNumber,
                    expDate,
                    setExpDate,
                    cvv,
                    setCvv,
                    rememberDetails,
                    setRememberDetails,
                    duration,
                    setDuration,
                    useStorageCreditDetails,
                    setUseStorageCreditDetails,
                    storageCreditDetails,
                    setStorageCreditDetails,
                  }}
                >
                  <PaymentForm />
                </SharedContext.Provider>
              )
            ) : enrollment === 'success' ? (
              <Alert severity="success">You register to the course succesfully!</Alert>
            ) : enrollment === 'conflict' ? (
              <Alert severity="warning">You have already register to this course!</Alert>
            ) : enrollment === 'full' ? (
              <Alert severity="info">The course is full! please try again!</Alert>
            ) : (
              <Alert severity="error">Failed</Alert>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          {(new Date(props.prop.StartDate) > new Date()) && (
            <Button onClick={handleClick}>Delete</Button>
          )}
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
            message="Warning!"
            action={action}
          />

          <Snackbar open={openDeleted} autoHideDuration={6000} onClose={() => setOpenDeleted(false)}>
            <Alert
              onClose={() => setOpenDeleted(false)}
              severity={successDelete === 'Try Later...:(' ? "warning" : 'success'}
              variant="filled"
              sx={{ width: '100%' }}
            >
              {successDelete}
            </Alert>
          </Snackbar>


          {showPayment && enrollment === '' ? (
            <Button
              onClick={handlePayment}
              disabled={
                (!useStorageCreditDetails) &&
                (nameCard === '' || cardNumber.length < 16 || expDate === new Date() || cvv.length < 3)
              }
            >
              Pay
            </Button>
          ) : enrollment === '' ? (
            GetCookie() ? props.show === true && <Button onClick={handleRegister}>For Registration</Button> : (
              <BootstrapDialogTitle />
            )
          ) : null}
        </DialogActions>
      </Dialog>
    </div>
  );
}
