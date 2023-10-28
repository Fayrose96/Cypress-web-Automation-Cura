import Homepage from "../../pages/Homepage";
import LoginPage from "../../pages/LoginPage";

describe('User Make An Appoinment', () => {
    const homepage = new Homepage();
    const loginPage = new LoginPage();
    beforeEach(()=>{
        cy.viewport(1920,1080);
    });
    before(()=>{
        homepage.websiteHomepage();
        loginPage.login ("John Doe", "ThisIsNotAPassword");
    });

    it("Testing Appointment", ()=>{
        homepage.makeAppointment(); // Use the `homepage` object to call the function
        homepage.appointmentConfirmation();
    })
  })

  export default Homepage;