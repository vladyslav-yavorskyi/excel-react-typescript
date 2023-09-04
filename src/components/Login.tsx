import React from 'react';

function Login(props: any) {
  return (
    <div>
      {!props.localUser && (
        <form
          onSubmit={(evt: any) => {
            evt.preventDefault();
            const data = new FormData(evt.target);
            const username = data.get('username') || '';
            props.onLogin(username.toString());
          }}
        >
          <label htmlFor="login-username" className="block mb-2 font-semibold">
            Username
          </label>
          <input
            type="text"
            className="block mb-2 py-2 px-3 bg-rp-overlay rounded"
            id="login-username"
            name="username"
            required
          />
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            type="submit"
          >
            Login
          </button>
        </form>
      )}
      <ul className="flex-1 list-disc list-inside overflow-y-auto">
        {props.localUser && (
          <li>
            {props.localUser.name}
            <span className="italic"> (you)</span>
          </li>
        )}
        {props.remoteUsers.map((user: any) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Login;
