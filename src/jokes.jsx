// import { useState } from 'react';

// export default function Form() {
//   const [answer, setAnswer] = useState('');
//   const [error, setError] = useState(null);
//   const [status, setStatus] = useState('typing');

//   if (status === 'success') {
//     return <h1>That's right!</h1>
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setStatus('submitting');
//     try {
//       await submitForm(answer);
//       setStatus('success');
//     } catch (err) {
//       setStatus('typing');
//       setError(err);
//     }
//   }

//   function handleTextareaChange(e) {
//     setAnswer(e.target.value);
//   }

//   return (
//     <>
//       <h2>City quiz</h2>
//       <p>
//         In which city is there a billboard that turns air into drinkable water?
//       </p>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={answer}
//           onChange={handleTextareaChange}
//           disabled={status === 'submitting'}
//         />
//         <br />
//         <button disabled={
//           answer.length === 0 ||
//           status === 'submitting'
//         }>
//           Submit
//         </button>
//         {error !== null &&
//           <p className="Error">
//             {error.message}
//           </p>
//         }
//       </form>
//     </>
//   );
// }

// function submitForm(answer) {
//   // Pretend it's hitting the network.
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let shouldError = answer.toLowerCase() !== 'lima'
//       if (shouldError) {
//         reject(new Error('Good guess but a wrong answer. Try again!'));
//       } else {
//         resolve();
//       }
//     }, 1500);
//   });
// }
// import { useState } from 'react';

// export default function Form() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [fullName, setFullName] = useState('');

//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value);
//     setFullName(e.target.value + ' ' + lastName);
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value);
//     setFullName(firstName + ' ' + e.target.value);
//   }

//   return (
//     <>
//       <h2>Let’s check you in</h2>
//       <label>
//         First name:{' '}
//         <input
//           value={firstName}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <label>
//         Last name:{' '}
//         <input
//           value={lastName}
//           onChange={handleLastNameChange}
//         />
//       </label>
//       <p>
//         Your ticket will be issued to: <b>{fullName}</b>
//       </p>
//     </>
//   );
// }
// import { useState } from 'react';

// export default function Form() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   const fullName = firstName + ' ' + lastName;

//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value);
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value);
//   }

//   return (
//     <>
//       <h2>Let’s check you in</h2>
//       <label>
//         First name:{' '}
//         <input
//           value={firstName}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <label>
//         Last name:{' '}
//         <input
//           value={lastName}
//           onChange={handleLastNameChange}
//         />
//       </label>
//       <p>
//         Your ticket will be issued to: <b>{fullName}</b>
//       </p>
//     </>
//   );
// }
// import { useState } from 'react';

// export default function Accordion() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   return (
//     <>
//       <h2>Almaty, Kazakhstan</h2>
//       <Panel
//         title="About"
//         isActive={activeIndex === 0}
//         onShow={() => setActiveIndex(0)}
//       >
//         With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
//       </Panel>
//       <Panel
//         title="Etymology"
//         isActive={activeIndex === 1}
//         onShow={() => setActiveIndex(1)}
//       >
//         The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
//       </Panel>
//     </>
//   );
// }

// function Panel({
//   title,
//   children,
//   isActive,
//   onShow
// }) {
//   return (
//     <section className="panel">
//       <h3>{title}</h3>
//       {isActive ? (
//         <p>{children}</p>
//       ) : (
//         <button onClick={onShow}>
//           Show
//         </button>
//       )}
//     </section>
//   );
// }

// import { useState } from 'react';
// import Chat from './Chat.jsx';
// import ContactList from './ContactList.jsx';

// export default function Messenger() {
//   const [to, setTo] = useState(contacts[0]);
//   return (
//     <div>
//       <ContactList
//         contacts={contacts}
//         selectedContact={to}
//         onSelect={contact => setTo(contact)}
//       />
//       <Chat contact={to} />
//     </div>
//   )
// }

// const contacts = [
//   { name: 'Taylor', email: 'taylor@mail.com' },
//   { name: 'Alice', email: 'alice@mail.com' },
//   { name: 'Bob', email: 'bob@mail.com' }
// ];

// import { useState } from 'react';
// import Chat from './Chat.jsx';
// import ContactList from './ContactList.jsx';

// export default function Messenger() {
//   const [to, setTo] = useState(contacts[0]);
//   return (
//     <div>
//       <ContactList
//         contacts={contacts}
//         selectedContact={to}
//         onSelect={contact => setTo(contact)}
//       />
//       <Chat key={to.email} contact={to} />
//     </div>
//   )
// }

// const contacts = [
//   { name: 'Taylor', email: 'taylor@mail.com' },
//   { name: 'Alice', email: 'alice@mail.com' },
//   { name: 'Bob', email: 'bob@mail.com' }
// ];
import { useState } from 'react';

export default function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}

