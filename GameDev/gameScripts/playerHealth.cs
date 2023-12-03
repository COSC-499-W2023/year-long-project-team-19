using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class playerHealth : MonoBehaviour
{
    // Start is called before the first frame update
    public static float maxHp;
    public static float HPStatic;
    public float hp;
    public Image health;
    public Text hpText;
    public float fillAmount;
    void Start()
    {
        maxHp = 30;
        HPStatic = 30;

    }

    // Update is called once per frame
    void Update()
    {
        //Fill health bar to this much
        if (hp < 0)
        {
            hp = 0;
        }
        fillAmount = fillHealth(hp);
        health.fillAmount = fillAmount; //percentage of fill amount
        if (hp >= maxHp)
        {
            hp = maxHp;
        }
        hpText.text = hp.ToString();


    }
    public float getHealth()
    {
        //return current hp
        return hp;
    }
    public float fillHealth(float x)
    {
        return x / maxHp;
    }
    public void setHealth(float x)
    {
        this.hp = x;
    }
    public float getFillAmount()
    {
        return fillAmount;
    }
}
