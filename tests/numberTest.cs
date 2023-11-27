using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;
using UnityEngine.SceneManagement;
using System.Linq;
public class numberTest
{
    [SetUp]
    public void SetUp()
    {
        SceneManager.LoadScene("SampleScene");
    }
    // A UnityTest behaves like a coroutine in Play Mode. In Edit Mode you can use
    // `yield return null;` to skip a frame.
    [UnityTest]
    public IEnumerator DeckSize()
    {
        // Use the Assert class to test conditions.
        // Use yield to skip a frame.
        yield return null;
        int x = GameObject.Find("playerDeck").GetComponent<playerDeck>().getDeckSize();
        string y = GameObject.Find("playerDeck").GetComponent<playerDeck>().getDeckTop();
        Debug.Log(x);
        Debug.Log(y);
        bool success = false;
        if (x == 20 && y == "Card1")
        {
            success = true;
        }
        Assert.AreEqual(true, success);
    }

    [UnityTest]
    public IEnumerator Initial_Draw_test()
    {
        // Use the Assert class to test conditions.
        // Use yield to skip a frame.
        yield return new WaitForSeconds(7);

       GameObject x = GameObject.Find("hand");
       bool y = false;
       Debug.Log(x.transform.childCount);
       if(x.transform.childCount==5){
        y = true;
       }
       Assert.AreEqual(true, y);
    }

    [UnityTest]

    public IEnumerator turn_test(){
    GameObject gameObject = new GameObject();
    turnScript turnScriptComponent = gameObject.AddComponent<turnScript>();

        // Ensure initial values are set correctly
        Assert.IsTrue(turnScriptComponent.isMyTurn);
        Assert.AreEqual(1, turnScriptComponent.myTurn);
        Assert.AreEqual(0, turnScriptComponent.isTheirTurn);
        Assert.AreEqual(1, turnScriptComponent.maxMana);
        Assert.AreEqual(1, turnScriptComponent.currentMana);
        Assert.IsFalse(turnScript.turnStart);

        // Simulate ending player's turn
        turnScriptComponent.endTurn();
        
        // Ensure it's now opponent's turn
        Assert.IsFalse(turnScriptComponent.isMyTurn);
        Assert.AreEqual(1, turnScriptComponent.isTheirTurn);

        // Simulate ending opponent's turn
        turnScriptComponent.endOpponentTurn();

        // Wait for one frame update to ensure changes take effect
        yield return null;

        // Ensure it's back to player's turn, and mana is updated
        Assert.IsTrue(turnScriptComponent.isMyTurn);
        Assert.AreEqual(1, turnScriptComponent.myTurn);
        Assert.AreEqual(2, turnScriptComponent.maxMana);
        Assert.AreEqual(2, turnScriptComponent.currentMana);
        Assert.IsTrue(turnScript.turnStart); 
}

[UnityTest]
    public IEnumerator CardDatabase_PopulationTest()
    {
        cardDatabase database = new GameObject().AddComponent<cardDatabase>();
    
        database.populateList();
    
        yield return null;
        Assert.NotNull(cardDatabase.cardList);
        Assert.Greater(cardDatabase.cardList.Count, 0);
        Assert.AreEqual("Training dummy", cardDatabase.cardList[1].cardName);
        Assert.AreEqual(5, cardDatabase.cardList[2].cost);
        yield return null;
    }

}
