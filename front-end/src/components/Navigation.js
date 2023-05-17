import React from "react";
import {
	Link,
	useLocation
} from "react-router-dom";

export default function Navigation() {
	const location = useLocation();
	const isRegistrationPage = location.pathname === "/register";
	const isLoginPage = location.pathname === "/login";
	const isAddItemPage = location.pathname === "/add";
	const isItemsViewPage = location.pathname === "/items";
	const isLandingPage = location.pathname === "/";

	const linkStyle = {
		textDecoration: "none"
	};

	return (
		<nav>
			<div>
				{isLandingPage && (
					<div class="landing-nav">
						<Link class="landing-nav-link" to="/login" style={linkStyle}>
							Login
						</Link>
						<Link class="landing-nav-link" to="/register" style={linkStyle}>
							Register
						</Link>
					</div>
				)}

				{isLoginPage && (
					<div class="login-nav">
						<Link class="login-nav-link" to="/" style={linkStyle}>
							<img
								id="logo"
								src="logo_transparent.png"
								alt="logo"
								className="float-start"
							></img>
						</Link>
						<Link class="login-nav-link" to="/register" style={linkStyle}>
							Register
						</Link>
					</div>
				)}

				{isRegistrationPage && (
					<div class="register-nav">
						<Link class="register-nav-link" to="/" style={linkStyle}>
							<img
								id="logo"
								src="logo_transparent.png"
								alt="logo"
								className="float-start"
							></img>
						</Link>
						<Link class="register-nav-link" to="/login" style={linkStyle}>
							Login
						</Link>
					</div>
				)}

				{isAddItemPage && (
					<div class="add-nav">
						<Link class="add-nav-link" to="/" style={linkStyle}>
							<img
								id="logo"
								src="logo_transparent.png"
								alt="logo"
								className="float-start"
							></img>
						</Link>
						<Link class="add-nav-link" to="" style={linkStyle}>
							Log Out
						</Link>
					</div>
				)}

				{isItemsViewPage && (
					<div class="add-nav">
						<Link class="add-nav-link" to="/" style={linkStyle}>
							<img
								id="logo"
								src="logo_transparent.png"
								alt="logo"
								className="float-start"
							></img>
						</Link>
					   <div>
                         <Link class="add-nav-link" to="/add" style={linkStyle}>
                             Add
                         </Link>
                         <Link class="add-nav-link" to="" style={linkStyle}>
                          Log Out
                          </Link>
                        </div>
					</div>
				)}
			</div>
		</nav>
	);
}