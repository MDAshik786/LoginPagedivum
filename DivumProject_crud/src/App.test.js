import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import Form from "./Form";

describe("test Cases", () => {
  test("Email Validation", () => {
    render(<App />);
    const addButton = screen.getByTestId("add-button");
    fireEvent.click(addButton);
    const emailId = screen.getByTestId("email-id");
    const submit = screen.getByTestId("submit");
    //Test Case 1
    fireEvent.change(emailId, { target: { value: "ashik12gmailcom" } });
    fireEvent.click(submit);
    expect(screen.getByTestId("email-error").innerHTML).toBe(
      'Please Enter a Valid Email<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="info-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></svg>'
    );

    //Test case 2
    fireEvent.change(emailId, { target: { value: "" } });
    fireEvent.click(submit);
    expect(screen.getByTestId("email-error").innerHTML).toBe(
      'Email is Required<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="info-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></svg>'
    );

   
  });
  // test("First Name Validation",() => {
  //   fireEvent.change(, { target: { value: "" } });
  //   render(<App />);
  //   const addButton = screen.getByTestId("add-button");
  //   fireEvent.click(addButton);
  //   const fnId = screen.getByTestId("fn-id");
  //   const submit = screen.getByTestId("submit");
  //   fireEvent.change(fnId, { target: { value: "" } });
  //   expect(screen.getByTestId("email-error").innerHTML).toBe(
  //     'First Name is Required<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="info-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></svg>'
  //   );
  // })
});

// test("check email error should not present", () => {
//   render(<Form />);
//   const errorMail = screen.getByTestId("email-error");
//   expect(errorMail).toBeInTheDocument();
//   expect(errorMail.textContent).toBe("Email is Required");
// });

test("check email error  not present", () => {
  render(<Form />);
  const errorMail = screen.queryByTestId("email-error");
  expect(errorMail).toBe(null);
});
