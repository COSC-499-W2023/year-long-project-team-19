using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
public class CardDatabase : MonoBehaviour
{
  public static List<Card> card_list = new List<Card>();

  void Awake(){
    card_list.Add(new Card(0, "None", 0, 0, "None"));
    card_list.Add(new Card(1, "Human", 2, 1, "This is a Human"));
    card_list.Add(new Card(2, "Dwarf", 3, 3, "This is a Dwarf"));
    card_list.Add(new Card(3, "Elf", 4, 4, "This is an Elf"));
  }
}
