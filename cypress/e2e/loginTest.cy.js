import LoginPage from "../../pages/LoginPage";



describe('login suite', () => {
  const loginPage = new LoginPage();

  it('login with valid credentials', () => {
    loginPage.login("John Doe", "ThisIsNotAPassword");
  })
})