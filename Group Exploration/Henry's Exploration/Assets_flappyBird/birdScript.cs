using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class birdScript : MonoBehaviour
{
    public Rigidbody2D rb;
    public float flapStrength = 8;

    // Start is called before the first frame update
    void Start()
    {
       gameObject.name = "Barbosa";
    }

    // Update is called once per frame
    void Update()
    {
        if(Input.GetKeyDown(KeyCode.Space))
        {
            rb.velocity = Vector2.up * flapStrength;
        }
        
    }
}
