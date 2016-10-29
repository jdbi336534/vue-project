package com.example.jdb.myfirstapp;

import android.app.Activity;
import android.app.AlertDialog;
import android.os.Build;
import android.os.Bundle;
import android.webkit.JsResult;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.WebViewClient;


/**
 * Created by jdb on 2016/10/29.
 */

public class WebviewActivity extends Activity {
    private WebView testwebview;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.webview);
        testwebview = (WebView) findViewById(R.id.bhb);
        //设置WebView属性，能够执行Javascript脚本
        testwebview.getSettings().setJavaScriptEnabled(true);
        //加载需要显示的网页
        testwebview.loadUrl("http://www.woline.top:8080/index.html");
//        testwebview.setWebChromeClient(new HelloWebViewcroClient());
        testwebview.setWebViewClient( new HelloWebViewClient());


    }




//    private  class HelloWebViewcroClient extends WebChromeClient{
//        @Override
//        public boolean onJsAlert(WebView view, String url, String message, JsResult result) {
//            AlertDialog.Builder builder=new AlertDialog.Builder(WebviewActivity.this);
//            builder.setTitle("自定义alert事件");
//            builder.show();
//            return super.onJsAlert(view, url, message, result);
//        }
//    }
    private class HelloWebViewClient extends WebViewClient {
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            view.loadUrl(url);
            return true;
        }
    }
}
