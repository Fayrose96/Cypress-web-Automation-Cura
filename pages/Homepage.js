class Homepage{
    websiteHomepage(){
        cy.visit("https://katalon-demo-cura.herokuapp.com/");
    }
    makeAppointment(){
        cy.get('#combo_facility').select("Seoul CURA Healthcare Center");
        cy.get('#chk_hospotal_readmission').click();
        cy.get('#radio_program_medicaid').click();
        cy.get('#txt_comment').type("I need an urgent checkup");
        cy.get('#txt_visit_date').click();
        cy.get('tbody > :nth-child(2) > :nth-child(2)').click();
        cy.get('#btn-book-appointment').click();
    }
    appointmentConfirmation(){
        cy.get('h2').should("contain", "Appointment Confirmation");
        cy.get('.lead').should("contain", "Please be informed that your appointment has been booked as following:");
    }
      
}

export default Homepage;