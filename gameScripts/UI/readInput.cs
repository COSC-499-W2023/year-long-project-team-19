using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class readInput : MonoBehaviour
{

    //Need public string to store the user's input when it is entered into the login page
    public InputField username_email;
    public InputField user_pass;

    public Button loginButton;


    public void CallLogin()
    {
        StartCoroutine(Login());
    }

    IEnumerator Login()
    {
        //make Form to take the user's input
        WWWForm form = new WWWForm();
        form.AddField("username", username_email.text);
        form.AddField("password", user_pass.text);

        //connect to url of our database's php file, PASS FORM TO URL
        WWW www = new WWW("http://localhost/sqlconnect/login.php", form);
        yield return www; //tell Unity to yield running the rest of the game till it gets this info from the url

        //Error check what our PHP file returned
        if (www.text == "0")
        {
            Debug.Log("User logged in successfully.");

        }
        else 
        {
            Debug.Log("User logged FAILED. Error Code: " + www.text);
        }
    }

    public void VerifyInputs()
    {
        loginButton.interactable = (username_email.text.Length >= 10 && user_pass.text.Length >= 10);
    }




   /* //LOGIN INPUTS
    public void ReadStringUsernameL(string usernameInputString)
    {
        username.text = usernameInputString; //store the entered text as the user's username
        //PlayerPrefs.SetString("uname", username.text);
        Debug.Log(username);
    }
    public void ReadStringPasswordL(string passwordInputString)
    {
        password.text = passwordInputString; //store the entered text as the user's password
        //PlayerPrefs.SetString("upass", password.text);
        Debug.Log(password);
    }

    //Need public string to store the user's input when it is entered into the Create Account page
    public Text usernameCA;
    public Text passwordCA_1;
    public Text passwordCA_2;

    //CREATE ACCOUNTS INPUTS
    public void ReadStringUsernameCA(string usernameInputStringCA)
    {
        usernameCA.text = usernameInputStringCA; //store the entered text as the user's username
        Debug.Log(usernameCA);
    }
    public void ReadStringPasswordCA_1(string passwordInputStringCA1)
    {
        passwordCA_1.text = passwordInputStringCA1; //store the entered text as the user's password they want to use
        Debug.Log(passwordCA_1);
    }
    public void ReadStringPasswordCA_2(string passwordInputStringCA2)
    {
        passwordCA_2.text = passwordInputStringCA2; //store the entered text as the "confirm password" password
        Debug.Log(passwordCA_2);
    }*/

}
