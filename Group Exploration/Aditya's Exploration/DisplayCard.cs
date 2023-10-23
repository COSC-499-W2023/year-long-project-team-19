using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;
using TMPro;
public class DisplayCard : MonoBehaviour
{
    public List<Card> displayCard = new List<Card>();
    public int displayId;
    public int id;
    public string card_name;
    public int cost;
    public int power;
    public string card_description;

    public TMP_Text nameText;
    public TMP_Text costText;
    public TMP_Text powerText;
    public TMP_Text descriptionText;
    // Start is called before the first frame update
    void Start()
    {
        displayCard[0] = CardDatabase.card_list[displayId];
        
    }

    // Update is called once per frame
    void Update()
    {
        id = displayCard[0].id;
        card_name = displayCard[0].card_name;
        cost = displayCard[0].cost;
        power = displayCard[0].power;
        card_description = displayCard[0].card_description;

       nameText.text = " " + card_name; 
       costText.text = " " + cost; 
       powerText.text = " " + power; 
       descriptionText.text = " " + card_description; 
    }
}
