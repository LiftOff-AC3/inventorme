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
	const handleLogout = async () => {
		try {
			await localStorage.removeItem("token");
			await localStorage.removeItem("userUuid");
		} catch (error) {
			alert("An error occurred. Please try again later.");
		}
	};

	const linkStyle = {
		textDecoration: "none"
	};

	return (
		<nav>
			<div>
				{isLandingPage && (
					<div className="landing-nav">
						<Link className="landing-nav-link" to="/login" style={linkStyle}>
							Login
						</Link>
						<Link className="landing-nav-link" to="/register" style={linkStyle}>
							Register
						</Link>
					</div>
				)}

				{isLoginPage && (
					<div className="login-nav">
						<Link className="login-nav-link" to="/" style={linkStyle}>
							<img
								id="logo-nav"
								src="logo_transparent_nav.png"
								alt="logo"
								className="float-start"
							></img>
						</Link>
						<Link className="login-nav-link" to="/register" style={linkStyle}>
							Register
						</Link>
					</div>
				)}

				{isRegistrationPage && (
					<div className="register-nav">
						<Link class="register-nav-link" to="/" style={linkStyle}>
							<img
								id="logo-nav"
								src="logo_transparent_nav.png"
								alt="logo"
								className="float-start"
							></img>
						</Link>
						<Link className="register-nav-link" to="/login" style={linkStyle}>
							Login
						</Link>
					</div>
				)}

				{isAddItemPage && (
					<div className="add-nav">
						<Link className="add-nav-link" to="/" style={linkStyle}>
							<img
								id="logo-nav"
								src="logo_transparent_nav.png"
								alt="logo"
								className="float-start"
							></img>
						</Link>
						<Link className="add-nav-link" onClick={handleLogout} to="" style={linkStyle}>
							Log Out
						</Link>
					</div>
				)}

				{isItemsViewPage && (
					<div className="add-nav">
						<Link className="add-nav-link" to="/" style={linkStyle}>
							<img
								id="logo-nav"
								src="logo_transparent_nav.png"
								alt="logo"
								className="float-start"
							></img>
						</Link>
						<div>
							<Link className="add-nav-link" onClick={handleLogout} to="" style={linkStyle}>
								Log Out
							</Link>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
