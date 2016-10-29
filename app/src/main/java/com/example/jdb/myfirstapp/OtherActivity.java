package com.example.jdb.myfirstapp;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

/**
 * Created by jdb on 2016/10/28.
 */

public class OtherActivity extends Activity {
    private TextView MytextView =null;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //设置要显示的布局文件
        setContentView(R.layout.other);
        Intent intent=getIntent();
//        intent.putExtra("testIntent","123");
//        从这里取到刚才传递过来的键值对
        String value =intent.getStringExtra("testIntent");
        MytextView=(TextView)findViewById(R.id.MytextView);
//        MytextView.setText(R.string.other);
        MytextView.setText(value);
    }
}
