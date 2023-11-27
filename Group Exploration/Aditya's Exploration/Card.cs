using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
[System.Serializable]
public class Card 
{
    public int id;
    public string card_name;
    public int cost;
    public int power;
    public string card_description;

    public Card(){

    }

    public Card(int Id, string Card_name, int Cost, int Power, string Card_description){
        id = Id;
        card_name = Card_name;
        cost = Cost;
        power = Power;
        card_description = Card_description;
    }
}
