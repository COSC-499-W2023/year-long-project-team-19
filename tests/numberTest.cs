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

        turnScriptComponent.Start();

        // Initial values check
        Debug.Log("Initial values check...");
        Debug.Log("isMyTurn: " + turnScriptComponent.isMyTurn);
        Debug.Log("myTurn: " + turnScriptComponent.myTurn);
        Debug.Log("isTheirTurn: " + turnScriptComponent.isTheirTurn);
        Debug.Log("maxMana: " + turnScriptComponent.maxMana);
        Debug.Log("currentMana: " + turnScriptComponent.currentMana);

        Assert.IsTrue(turnScriptComponent.isMyTurn);
        Assert.AreEqual(1, turnScriptComponent.myTurn);
        Assert.AreEqual(0, turnScriptComponent.isTheirTurn); // Ensure this is set to 0 initially
        // Add more assertions for other initial values if needed

        turnScriptComponent.endTurn();
        // Simulate ending player's turn
        Debug.Log("Ending player's turn...");
        Debug.Log("Checking opponent's turn...");
        Debug.Log("isMyTurn: " + turnScriptComponent.isMyTurn);
        Debug.Log("isTheirTurn: " + turnScriptComponent.isTheirTurn);

        Assert.IsFalse(turnScriptComponent.isMyTurn);
        Assert.AreEqual(1, turnScriptComponent.isTheirTurn);

        // Simulate ending opponent's turn
        Debug.Log("Ending opponent's turn...");
        turnScriptComponent.endOpponentTurn();

        yield return null; // Wait for one frame update

        // Ensure it's back to player's turn, and mana is updated
        Debug.Log("Checking player's turn and mana after opponent's turn...");
        Debug.Log("isMyTurn: " + turnScriptComponent.isMyTurn);
        Debug.Log("myTurn: " + turnScriptComponent.myTurn);
        Debug.Log("maxMana: " + turnScriptComponent.maxMana);
        Debug.Log("currentMana: " + turnScriptComponent.currentMana);
        Debug.Log("turnStart: " + turnScript.turnStart);

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

    [UnityTest]
    public IEnumerator ShuffleDeck_ShouldChangeOrder()
    {
       GameObject deckObject = new GameObject();
        playerDeck deckScript = deckObject.AddComponent<playerDeck>();

        // Initialize 20 sample cards (similar to your cardDatabase initialization)
        List<Card1> sampleCards = new List<Card1>();
        for (int i = 0; i < 20; i++)
        {
            sampleCards.Add(new Card1(i, $"Card {i}", Random.Range(1, 5), Random.Range(1, 5), Random.Range(1, 5), $"Description {i}"));
        }

        // Assign the sample cards to the playerDeck script
        deckScript.deck = sampleCards;

        // Save the initial order of the deck
        List<Card1> initialOrder = new List<Card1>(deckScript.deck);

        // Log the initial order
        Debug.Log("Initial Order:");
        foreach (var card in initialOrder)
        {
            Debug.Log(card.print());
        }
        
        // Perform the shuffle action
        deckScript.shuffle();

        // Get the current order of the deck after shuffle
        List<Card1> shuffledOrder = new List<Card1>(deckScript.deck);

        // Log the shuffled order
        Debug.Log("Shuffled Order:");
        foreach (var card in shuffledOrder)
        {
            Debug.Log(card.print());
        }

        // Assert that the order has changed after shuffling
        Assert.AreNotEqual(initialOrder, shuffledOrder);

        yield return null;

        // Clean up created objects
        GameObject.Destroy(deckObject);
    }

}
