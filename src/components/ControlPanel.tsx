import * as React from 'react';

function ControlPanel(props: { signOut: any, user: any }) {
  const signOut = props.signOut;
  const user = props.user;

  return (
    <div className="control-panel">
      {(user !== null) ? (
        <div>
          <h1>Hello, {user.username}</h1>
          {(signOut !== null) ? (
            <button onClick={signOut}>Sign out</button>
            ) : (
            <button>No Auth Controls</button>
            )
          }
        </div>
      ) : (
        <div></div>
      )}

      {/*<h3>Marker, Popup, NavigationControl and FullscreenControl </h3>*/}
      {/*<p>*/}
      {/*  Map showing top 20 most populated cities of the United States. Click on a marker to learn*/}
      {/*  more.*/}
      {/*</p>*/}
      {/*<p>*/}
      {/*  Data source:{' '}*/}
      {/*  <a href="https://en.wikipedia.org/wiki/List_of_United_States_cities_by_population">*/}
      {/*    Wikipedia*/}
      {/*  </a>*/}
      {/*</p>*/}
      {/*<div className="source-link">*/}
      {/*  <a*/}
      {/*    href="https://github.com/visgl/react-map-gl/tree/7.0-release/examples/controls"*/}
      {/*    target="_new"*/}
      {/*  >*/}
      {/*    View Code ↗*/}
      {/*  </a>*/}
      {/*</div>*/}
    </div>
  );
}

export default React.memo(ControlPanel);
