using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class cardDatabase : MonoBehaviour
{
   public static List<Card1> cardList = new List<Card1>();

   void Awake(){
    //insert card using format: Card(int id, string cardName, int cost, int pow, int hp, string txt)
    cardList.Add(new Card1(0, "None", 5, 1, 5, "None"));
    cardList.Add(new Card1(1, "Training dummy", 1, 1, 1, "Taunt"));
    cardList.Add(new Card1(2, "Kobold charger", 5, 1, 5, "Haste"));
   }
}
