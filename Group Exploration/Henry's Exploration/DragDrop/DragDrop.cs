using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DragDrop : MonoBehaviour
{
    private Vector3 mouseOffset;

    private Vector3 GetMousePos()
    {
        Vector3 mousePos = Input.mousePosition;

        mousePos.z = Camera.main.WorldToScreenPoint(transform.position).z;

        return Camera.main.ScreenToWorldPoint(mousePos);
    }

    private void OnMouseDown()
    {
        mouseOffset = transform.position - GetMousePos();
    }

    private void OnMouseDrag()
    {
        //Update mouse pos
        transform.position = GetMousePos() + mouseOffset;
    }
}
