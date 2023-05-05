import aws_config from "../aws-config";
import * as aws_amplify_core from "@aws-amplify/core";
import * as aws_amplify_react from "aws-amplify-react";
import { Auth } from "@aws-amplify/auth";
import { AuthState } from '@aws-amplify/ui-components';
import { Component } from "react";
import { ISignInProps } from "aws-amplify-react/lib-esm/Auth/SignIn";
import { ISignInState } from "aws-amplify-react/lib/Auth/SignIn";
import { ISignOutProps } from "aws-amplify-react/lib-esm/Auth/SignOut";

const Amplify = aws_amplify_core.Amplify;
const Authenticator = aws_amplify_react.Authenticator;
const SignIn = aws_amplify_react.SignIn;
const SignOut = aws_amplify_react.SignOut;

Amplify.configure(aws_config);

export class CustomSignIn extends SignIn {
    private SetAuthenticatedUser: any;

    constructor(props: ISignInProps) {
        super(props);

        // this.state = {
        //     Username : '',
        //     Password : '',
        //     error: ''
        // };
        this.signIn = this.signIn.bind(this);
        this.handleFormSubmission = this.handleFormSubmission.bind(this);
        this.SetAuthenticatedUser = (props as any).SetAuthenticatedUser;
    }

    async handleFormSubmission(evt: { preventDefault: () => void; }) {
        evt.preventDefault();
        await this.signIn();
    }

    async signIn() {
        // const username = this.state.username;
        // const password = this.state.Password;
        //
        // console.log("Attempting to sign-in ...");
        //
        // try {
        //     const user = await Auth.signIn(username, password);
        //     console.log("Sign-in user:", user);
        //     this.SetAuthenticatedUser(user, AuthState.SignedIn)
        //         .then(async () => {
        //             console.log("... result:", user);
        //             super.changeState("signOut");
        //         });
        //
        // } catch (err) {
        //     if (err.code === "UserNotConfirmedException" ||
        //         err.code === "NotAuthorizedException" ||
        //         err.code === "UserNotFoundException"
        //     ) {
        //         this.setState({
        //             Username : '',
        //             Password : '',
        //             error: `Login failed: ${err.code}`
        //         });
        //     } else {
        //         this.setState({
        //             Username : '',
        //             Password : '',
        //             error: `An error has occurred: ${err.code}`
        //         });
        //         console.error(err);
        //     }
        // }
    }

    showComponent(theme: any) {
        return (
            <div className="custom-auth tc pt5">
                <h2>Sign in to your Account</h2>
                <div className="pa2">
                    <label htmlFor="username" className="pr3">UserName</label>
                    <input className="ba b--gray br2 pl2 shadow-2" type="text" placeholder="Username"
                           onChange={(e) => this.setState(({Username: e.target.value} as ISignInState))}/>
                </div>
                <div className="pa2">
                    <label htmlFor="password" className="pr3">Password</label>
                    <input className="ba b--gray br2 pl2 shadow-2" type="password" placeholder="Password"
                           onChange={(e) => this.setState(({Password: e.target.value} as ISignInState))}/>
                </div>
                <div className="pa2">
                    <a className="f6 link dim br-pill ba ph3 pv2 mb2 dib dark-green" onClick={this.handleFormSubmission}
                       href="#0">Sign In</a>
                </div>
                <div className="pa2">
                    Do not remember password ? <a className="f5 fw6 dark-green   link "
                                                  onClick={() => this.SetAuthenticatedUser(null, AuthState.ForgotPassword)}
                                                  href="#0">Forgot Password</a>
                </div>
            </div>
        )
    }
}

export class CustomSignOut extends SignOut {
    private SetAuthenticatedUser: any;

    constructor(props: ISignOutProps) {
        super(props);

        this.signOut = this.signOut.bind(this);
        this.handleFormSubmission = this.handleFormSubmission.bind(this);
        this.SetAuthenticatedUser = (props as any).SetAuthenticatedUser;
    }

    async handleFormSubmission(evt: { preventDefault: () => void; }) {
        evt.preventDefault();
        await this.signOut();
    }

    async signOut() {
        console.log("Attempting to sign-out ...");

        Auth.signOut({ global: true })
            .then(
                () => {},
                err => {
                    if (err.code === "UserNotConfirmedException" ||
                        err.code === "NotAuthorizedException" ||
                        err.code === "UserNotFoundException"
                    ) {
                        this.setState(({
                            Username : '',
                            Password : '',
                            error: `Login failed: ${err.code}`
                        } as ISignInState));
                    } else {
                        this.setState(({
                            Username : '',
                            Password : '',
                            error: `An error has occurred: ${err.code}`
                        }) as ISignInState);
                        console.error(err);
                    }
                }
            );


        await this.SetAuthenticatedUser(null, AuthState.SignedOut);
    }

    showComponent (theme: any) {
        return (
            <div className="custom-auth custom-sign-out tc pt5"></div>
        )
    }
}

export class Header extends Component {
    private getAuthState: () => any;
    private setAuthState: (values: any) => any;
    private GetAuthStatus: () => any;
    private GetUser: () => any;
    private SetAuthenticatedUser: (User: any, Val: any) => Promise<any>;
    private GetUserName: () => any;
    private SetUserName: (values: any) => any;

    constructor(props: {} | Readonly<{}>) {
        super(props);

        // const [ authState, setAuthState ] = props.authState;
        this.getAuthState = () => (this.props as any).authState[0];
        this.setAuthState = (values) => (this.props as any).authState[1](values);

        this.GetAuthStatus = () => {
            setTimeout(() => console.log("GetAuthStatus:", (this.props as any).authState[0]));
            return this.getAuthState().status;
        };

        this.GetUser = () => {
            return this.getAuthState().user;
        };

        this.SetAuthenticatedUser = async (User, Val) => {
            console.log("SetAuthenticatedUser:", User);
            return await this.setAuthState({
                status: Val,
                user: User,
                sign_up_username: (User !== null &&typeof User['username'] === "string") ?
                    User['username'] :
                    this.GetUserName()
            })
        };

        this.GetUserName = () => {
            return this.getAuthState().sign_up_username;
        };

        this.SetUserName = async (Val) => {
            return await this.setAuthState({
                status: this.GetAuthStatus(),
                user: this.GetUser(),
                sign_up_username: Val
            });
        };
    }

    async checkAuthenticatedUser () {
        Auth.currentAuthenticatedUser()
            .then(
                async user => {

                    if (typeof user['attributes'] === "object" && typeof user['signInUserSession'] === "object") {
                        await this.SetAuthenticatedUser(user, AuthState.SignedIn);

                        console.log("(Header) user:", user);
                        console.log("(Header) Initial auth state:", this.getAuthState());
                    } else {
                        console.log("ERROR");
                        await this.SetAuthenticatedUser(null, AuthState.SignedOut);
                    }
                },
                async error => {
                    console.log("ERROR");
                    await this.SetAuthenticatedUser(null, AuthState.SignedOut);
                    console.log("(Header) Initial auth state:", this.getAuthState(), error);
                }
            );
    }

    async componentDidMount () {
        try {
            await this.checkAuthenticatedUser();
        } finally {
            console.log("Current auth state:", this.GetAuthStatus());
        }
    }

    render() {
        return (
            <div>
                <div>Authenticated: {(this.GetAuthStatus() == AuthState.SignedIn)? this.GetAuthStatus() + " as " + this.GetUserName() : this.GetAuthStatus() }</div>
        <header className="App-header">
        <h1 className="App-title">Amplify React</h1>
        {/*<Authenticator hide={[ SignIn ]} amplifyConfig={aws_config}>*/}
        {/*    <CustomSignIn SetAuthenticatedUser={this.SetAuthenticatedUser} />*/}
        {/*    <CustomSignOut SetAuthenticatedUser={this.SetAuthenticatedUser} />*/}
        {/*</Authenticator>*/}
        </header>
        {/*}*/}
        </div>
    )
    }
}
