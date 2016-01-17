///<reference path="../../../dist/android-ui.d.ts"/>
    module sample.app.R {
    const _layout_data = {
        "sample_animation": "<ScrollView>\n    <LinearLayout\n            android:padding=\"0 6dp\"\n            gravity=\"center\"\n            android:orientation=\"vertical\">\n        <TextView gravity=\"center\">Rotate:</TextView>\n        <ImageView\n                id=\"rotate_repeat\"\n                android:src=\"assets/images/logo_android_1@2x.png\"\n                android:layout_width=\"56dp\"\n                android:layout_height=\"56dp\"\n                android:layout_margin=\"20dp 12dp\"\n                ></ImageView>\n        <TextView gravity=\"center\">Translate:</TextView>\n        <ImageView\n                id=\"translate_repeat\"\n                android:src=\"assets/images/logo_android_1@2x.png\"\n                android:layout_width=\"56dp\"\n                android:layout_height=\"56dp\"\n                android:layout_margin=\"12dp\"\n                ></ImageView>\n        <TextView gravity=\"center\">Scale:</TextView>\n        <ImageView\n                id=\"scale_repeat\"\n                android:src=\"assets/images/logo_android_1@2x.png\"\n                android:layout_width=\"56dp\"\n                android:layout_height=\"56dp\"\n                android:layout_margin=\"12dp\"\n                ></ImageView>\n        <TextView gravity=\"center\">Alpha:</TextView>\n        <ImageView\n                id=\"alpha_repeat\"\n                android:src=\"assets/images/logo_android_1@2x.png\"\n                android:layout_width=\"56dp\"\n                android:layout_height=\"56dp\"\n                android:layout_margin=\"12dp\"\n                ></ImageView>\n        <TextView gravity=\"center\">Animation Set:</TextView>\n        <ImageView\n                id=\"anim_set\"\n                android:src=\"assets/images/logo_android_1@2x.png\"\n                android:layout_width=\"56dp\"\n                android:layout_height=\"56dp\"\n                android:layout_margin=\"12dp\"\n                ></ImageView>\n    </LinearLayout>\n</ScrollView>",
        "sample_base_widget": "<ScrollView>\n    <LinearLayout\n            android:orientation=\"vertical\"\n            android:padding=\"12dp\"\n            android:gravity=\"center\">\n        <TextView android:layout_width=\"wrap_content\">\n            TextView\n        </TextView>\n        <Button android:layout_width=\"wrap_content\">\n            Button\n        </Button>\n        <ImageView android:src=\"assets/images/logo_google_3.png\">\n        </ImageView>\n        <CheckBox android:layout_width=\"wrap_content\"\n                  android:layout_marginBottom=\"12dp\">\n            CheckBox\n        </CheckBox>\n        <RadioGroup\n                android:gravity=\"center\"\n                android:orientation=\"HORIZONTAL\"\n                android:layout_marginBottom=\"12dp\">\n            <RadioButton android:layout_width=\"wrap_content\">\n                Radio1\n            </RadioButton>\n            <RadioButton android:layout_width=\"wrap_content\">\n                Radio2\n            </RadioButton>\n            <RadioButton android:layout_width=\"wrap_content\">\n                Radio3\n            </RadioButton>\n        </RadioGroup>\n        <Button id=\"btn_open_dialog\"\n                android:layout_width=\"wrap_content\">\n            OpenDialog\n        </Button>\n        <Spinner android:layout_width=\"wrap_content\"\n                 android:entries='[\"Item1\", \"Item2\", \"Item3\", \"Item4\", \"Item5\", \"Item6\", \"Item7\"]'>\n        </Spinner>\n        <Button id=\"btn_show_popup\"\n                android:layout_width=\"wrap_content\">\n            PopupWindow\n        </Button>\n\n        <ProgressBar android:layout_height=\"wrap_content\"\n                     android:layout_width=\"wrap_content\"\n                     android:layout_marginBottom=\"12dp\"></ProgressBar>\n        <ProgressBar android:layout_height=\"wrap_content\"\n                     android:layout_width=\"match_parent\"\n                     android:layout_marginBottom=\"12dp\"\n                     style=\"@android:attr/progressBarStyleHorizontal\"\n                     android:max=\"100\"\n                     android:progress=\"50\"\n                     android:secondaryProgress=\"70\"></ProgressBar>\n\n        <SeekBar android:layout_height=\"wrap_content\"\n                 android:layout_width=\"match_parent\"\n                 android:layout_marginBottom=\"12dp\"></SeekBar>\n\n        <RatingBar android:layout_height=\"wrap_content\"\n                   android:layout_width=\"wrap_content\"\n                   android:layout_marginBottom=\"12dp\"></RatingBar>\n\n    </LinearLayout>\n</ScrollView>",
        "sample_button": "<ScrollView>\n    <LinearLayout\n            android:orientation=\"vertical\"\n            android:gravity=\"center\">\n        <Button\n                android:layout_width=\"wrap_content\">\n            Button\n        </Button>\n        <Button\n                android:layout_width=\"wrap_content\"\n                android:enabled=\"false\">\n            DisableButton\n        </Button>\n        <Button id=\"btn_click\">\n            ButtonClick\n        </Button>\n        <Button android:layout_width=\"wrap_content\"\n                onclick=\"this.setText('Click:'+new Date().getTime());\">\n            ButtonClick2\n        </Button>\n        <Button id=\"btn_long_click\">\n            ButtonLongClick\n        </Button>\n        <Button\n                android:style=\"@style/btn_custom1\"\n                >\n            ButtonStyled\n        </Button>\n        <Button\n                android:style=\"@style/btn_custom1\"\n                android:enabled=\"false\"\n                >\n            ButtonStyledDisable\n        </Button>\n        <Button\n                android:padding=\"8dp\"\n                android:layout_margin=\"6dp\"\n                android:textColor=\"@color/white\"\n                android:background=\"#f00\"\n                android:state_pressed=\"@style/btn_custom1/pressed\"\n                >\n            ButtonStyled2\n        </Button>\n        <Button\n                android:padding=\"8dp\"\n                android:layout_margin=\"6dp\"\n                android:textColor=\"@color/white\"\n                android:background=\"#f00\"\n                android:state_pressed=\"background:#f66;\"\n                >\n            ButtonStyled3\n        </Button>\n    </LinearLayout>\n</ScrollView>",
        "sample_contacte": "<LinearLayout\n        android:orientation=\"vertical\">\n    <Button id=\"open_activity_intent\">\n        startActivity with intent\n    </Button>\n    <Button id=\"open_activity_result\">\n        startActivity with result\n    </Button>\n    <ScrollView>\n        <LinearLayout android:orientation=\"vertical\">\n            <TextView id=\"console_tv\"\n                      android:gravity=\"center\">\n            </TextView>\n        </LinearLayout>\n    </ScrollView>\n</LinearLayout>",
        "sample_drawerlayout": "<android.support.v4.widget.DrawerLayout>\n    <LinearLayout\n            android:orientation=\"vertical\"\n            android:gravity=\"center\"\n            android:layout_height=\"match_parent\"\n            android:layout_width=\"match_parent\">\n        <Button\n                onclick=\"this.getParent().getParent().openDrawer(android.view.Gravity.LEFT);\"\n                android:layout_height=\"wrap_content\"\n                android:layout_width=\"wrap_content\"\n                >Open left drawer</Button>\n        <Button\n                onclick=\"this.getParent().getParent().openDrawer(android.view.Gravity.RIGHT);\"\n                android:layout_height=\"wrap_content\"\n                android:layout_width=\"wrap_content\"\n                >Open right drawer</Button>\n    </LinearLayout>\n    <LinearLayout\n            android:layout_gravity=\"left\"\n            android:background=\"white\"\n            android:clickable=\"true\"\n            android:layout_height=\"match_parent\"\n            android:layout_width=\"220dp\">\n        <TextView\n                android:layout_height=\"match_parent\"\n                android:layout_width=\"match_parent\"\n                android:gravity=\"center\"\n                >Left drawer</TextView>\n    </LinearLayout>\n    <LinearLayout\n            android:layout_gravity=\"right\"\n            android:background=\"white\"\n            android:clickable=\"true\"\n            android:layout_height=\"match_parent\"\n            android:layout_width=\"220dp\">\n        <TextView\n                android:layout_height=\"match_parent\"\n                android:layout_width=\"match_parent\"\n                android:gravity=\"center\"\n                >Right drawer</TextView>\n    </LinearLayout>\n</android.support.v4.widget.DrawerLayout>",
        "sample_expand_listview_item": "<FrameLayout id=\"item_child_layout\"\n             android:layout_width=\"match_parent\"\n             android:padding=\"12dp\">\n    <TextView id=\"item_child_text\"\n              android:padding=\"12dp\"\n              android:layout_width=\"wrap_content\"\n              android:layout_height=\"wrap_content\"\n              android:background=\"#55000000\"\n              android:textColor=\"white\"\n              android:layout_gravity=\"center\"\n            >\n    </TextView>\n</FrameLayout>",
        "sample_framelayout": "<FrameLayout>\n\n    <TextView\n            android:text=\"Text\"\n            android:layout_gravity=\"left|top\"\n            android:style=\"@style/textStyle\"\n            ></TextView>\n    <TextView\n            android:text=\"Text\"\n            android:layout_gravity=\"right|top\"\n            android:style=\"@style/textStyle\"\n            ></TextView>\n    <TextView\n            android:text=\"Text\"\n            android:layout_gravity=\"bottom|right\"\n            android:style=\"@style/textStyle\"\n            ></TextView>\n    <TextView\n            android:text=\"Text\"\n            android:layout_gravity=\"bottom|left\"\n            android:style=\"@style/textStyle\"\n            ></TextView>\n    <TextView\n            android:text=\"Text\"\n            android:layout_gravity=\"center\"\n            android:style=\"@style/textStyle\"\n            ></TextView>\n    <TextView\n            android:text=\"Text\"\n            android:layout_gravity=\"left|center_vertical\"\n            android:style=\"@style/textStyle\"\n            ></TextView>\n    <TextView\n            android:text=\"Text\"\n            android:layout_gravity=\"right|center_vertical\"\n            android:style=\"@style/textStyle\"\n            ></TextView>\n    <TextView\n            android:text=\"Text\"\n            android:layout_gravity=\"top|center_horizontal\"\n            android:style=\"@style/textStyle\"\n            ></TextView>\n    <TextView\n            android:text=\"Text\"\n            android:layout_gravity=\"bottom|center_horizontal\"\n            android:style=\"@style/textStyle\"\n            ></TextView>\n    <TextView\n            android:text=\"Text MarginBottom50\"\n            android:layout_marginBottom=\"50dp\"\n            android:layout_gravity=\"center\"\n            android:style=\"@style/textStyle\"\n            ></TextView>\n</FrameLayout>",
        "sample_gridview": "<FrameLayout>\n    <GridView id=\"gridView\"\n              android:numColumns=\"2\">\n    </GridView>\n</FrameLayout>",
        "sample_gridview_item": "<FrameLayout id=\"item_layout\"\n             android:layout_width=\"match_parent\"\n             android:padding=\"32dp\">\n    <TextView id=\"item_text\"\n              android:padding=\"16dp\"\n              android:layout_width=\"wrap_content\"\n              android:layout_height=\"wrap_content\"\n              android:background=\"#55000000\"\n              android:textColor=\"white\"\n              android:layout_gravity=\"center\"\n            >\n    </TextView>\n</FrameLayout>",
        "sample_htmlview": "<ScrollView android:fillViewport=\"true\">\n    <LinearLayout\n            android:orientation=\"vertical\">\n        <HtmlView>\n            <p style=\"font-size: 24px;text-align: center\">HtmlView</p>\n        </HtmlView>\n        <HtmlView style=\"padding:0 20px;box-sizing: border-box;line-height: 20px;\">\n            <p>HtmlView can wrap any <span style=\"color: red;font-weight: bold;\">HTML tag</span>, render with DOM, but too many HtmlView will reduce FPS.</p>\n            <p>HtmlView above on all Android Views</p>\n        </HtmlView>\n        <TextView android:gravity=\"center\">TextView</TextView>\n        <HtmlView style=\"overflow: visible;text-align: center;\">\n            <input style=\"font-size: 16px;text-align: center;box-shadow: 0 0 1px black;margin: 12px 0; padding: 6px;\" placeholder=\"Place Input\"/>\n        </HtmlView>\n    </LinearLayout>\n</ScrollView>",
        "sample_imageview": "<ScrollView>\n    <LinearLayout\n            android:padding=\"0 6dp\"\n            android:orientation=\"vertical\">\n        <TextView>Default(FitCenter):</TextView>\n        <LinearLayout>\n            <ImageView\n                    android:src=\"assets/images/logo_android_1@2x.png\"\n                    android:style=\"@style/imageStyle\"\n                    ></ImageView>\n            <ImageView\n                    android:src=\"assets/images/logo_android_1@2x.png\"\n                    android:layout_marginLeft=\"4dp\"\n                    android:layout_height=\"200dp\"\n                    android:style=\"@style/imageStyle\"\n                    ></ImageView>\n            <ImageView\n                    android:src=\"assets/images/logo_android_1@2x.png\"\n                    android:layout_width=\"match_parent\"\n                    android:layout_marginLeft=\"4dp\"\n                    android:style=\"@style/imageStyle\"\n                    ></ImageView>\n        </LinearLayout>\n        <TextView>FitStart:</TextView>\n        <LinearLayout>\n            <ImageView\n                    android:src=\"assets/images/logo_android_1@2x.png\"\n                    android:scaleType=\"fitStart\"\n                    android:layout_height=\"200dp\"\n                    android:style=\"@style/imageStyle\"\n                    ></ImageView>\n            <ImageView\n                    android:src=\"assets/images/logo_android_1@2x.png\"\n                    android:scaleType=\"fitStart\"\n                    android:layout_width=\"match_parent\"\n                    android:layout_marginLeft=\"4dp\"\n                    android:style=\"@style/imageStyle\"\n                    ></ImageView>\n        </LinearLayout>\n        <TextView>FitEnd:</TextView>\n        <LinearLayout>\n            <ImageView\n                    android:src=\"assets/images/logo_android_1@2x.png\"\n                    android:scaleType=\"fitEnd\"\n                    android:layout_height=\"200dp\"\n                    android:style=\"@style/imageStyle\"\n                    ></ImageView>\n            <ImageView\n                    android:src=\"assets/images/logo_android_1@2x.png\"\n                    android:scaleType=\"fitEnd\"\n                    android:layout_width=\"match_parent\"\n                    android:layout_marginLeft=\"4dp\"\n                    android:style=\"@style/imageStyle\"\n                    ></ImageView>\n        </LinearLayout>\n        <TextView>FitXy:</TextView>\n        <LinearLayout>\n            <ImageView\n                    android:src=\"assets/images/logo_android_1@2x.png\"\n                    android:scaleType=\"fitXy\"\n                    android:layout_height=\"200dp\"\n                    android:style=\"@style/imageStyle\"\n                    ></ImageView>\n            <ImageView\n                    android:src=\"assets/images/logo_android_1@2x.png\"\n                    android:scaleType=\"fitXy\"\n                    android:layout_width=\"match_parent\"\n                    android:layout_marginLeft=\"4dp\"\n                    android:style=\"@style/imageStyle\"\n                    ></ImageView>\n        </LinearLayout>\n        <TextView>Center:</TextView>\n        <LinearLayout>\n            <ImageView\n                    android:src=\"assets/images/logo_android_1@2x.png\"\n                    android:scaleType=\"center\"\n                    android:layout_height=\"80dp\"\n                    android:layout_width=\"80dp\"\n                    android:style=\"@style/imageStyle\"\n                    ></ImageView>\n            <ImageView\n                    android:src=\"assets/images/logo_android_1@2x.png\"\n                    android:scaleType=\"center\"\n                    android:layout_height=\"180dp\"\n                    android:layout_width=\"180dp\"\n                    android:layout_marginLeft=\"4dp\"\n                    android:style=\"@style/imageStyle\"\n                    ></ImageView>\n        </LinearLayout>\n        <TextView>centerCrop:</TextView>\n        <LinearLayout>\n            <ImageView\n                    android:src=\"assets/images/logo_android_1@2x.png\"\n                    android:scaleType=\"centerCrop\"\n                    android:layout_height=\"80dp\"\n                    android:layout_width=\"80dp\"\n                    android:style=\"@style/imageStyle\"\n                    ></ImageView>\n            <ImageView\n                    android:src=\"assets/images/logo_android_1@2x.png\"\n                    android:scaleType=\"centerCrop\"\n                    android:layout_marginLeft=\"4dp\"\n                    android:layout_height=\"100dp\"\n                    android:layout_width=\"60dp\"\n                    android:style=\"@style/imageStyle\"\n                    ></ImageView>\n            <ImageView\n                    android:src=\"assets/images/logo_android_1@2x.png\"\n                    android:scaleType=\"centerCrop\"\n                    android:layout_height=\"60dp\"\n                    android:layout_width=\"100dp\"\n                    android:layout_marginLeft=\"4dp\"\n                    android:style=\"@style/imageStyle\"\n                    ></ImageView>\n        </LinearLayout>\n        <TextView>centerInside:</TextView>\n        <LinearLayout>\n            <ImageView\n                    android:src=\"assets/images/logo_android_1@2x.png\"\n                    android:scaleType=\"centerInside\"\n                    android:layout_height=\"80dp\"\n                    android:layout_width=\"80dp\"\n                    android:style=\"@style/imageStyle\"\n                    ></ImageView>\n            <ImageView\n                    android:src=\"assets/images/logo_android_1@2x.png\"\n                    android:scaleType=\"centerInside\"\n                    android:layout_height=\"180dp\"\n                    android:layout_width=\"180dp\"\n                    android:layout_marginLeft=\"4dp\"\n                    android:style=\"@style/imageStyle\"\n                    ></ImageView>\n        </LinearLayout>\n\n        <TextView>Background:</TextView>\n        <FrameLayout\n                android:style=\"@style/imageStyle\"\n                android:backgroundUri=\"assets/images/logo_android_1@2x.png\"\n                ></FrameLayout>\n\n    </LinearLayout>\n</ScrollView>",
        "sample_life_callback": "<LinearLayout\n        android:orientation=\"vertical\">\n    <Button id=\"open_activity_normal\">\n        Open Normal Activity\n    </Button>\n    <Button id=\"open_activity_float\">\n        Open Floating Activity\n    </Button>\n    <ScrollView>\n        <LinearLayout android:orientation=\"vertical\">\n            <TextView id=\"console_tv\"\n                      android:gravity=\"center\">\n            </TextView>\n        </LinearLayout>\n    </ScrollView>\n</LinearLayout>",
        "sample_linearlayout": "<LinearLayout\n        android:gravity=\"center_vertical\"\n        android:orientation=\"vertical\">\n\n    <LinearLayout\n            android:orientation=\"vertical\">\n        <TextView\n                android:text=\"Vertical\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n        <TextView\n                android:text=\"Vertical\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n\n    </LinearLayout>\n    <LinearLayout\n            android:layout_marginTop=\"12dp\"\n            android:gravity=\"center\"\n            android:orientation=\"vertical\">\n        <TextView\n                android:text=\"Vertical-Center\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n        <TextView\n                android:text=\"Vertical-Center\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n\n    </LinearLayout>\n\n    <LinearLayout\n            android:layout_marginTop=\"12dp\"\n            android:orientation=\"horizontal\">\n        <TextView\n                android:text=\"horizontal\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n        <TextView\n                android:text=\"linear\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n        <TextView\n                android:text=\"layout\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n\n    </LinearLayout>\n    <LinearLayout\n            android:layout_marginTop=\"12dp\"\n            android:gravity=\"center\"\n            android:orientation=\"horizontal\">\n        <TextView\n                android:text=\"horizontal\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n        <TextView\n                android:text=\"linear\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n        <TextView\n                android:text=\"layout\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n        <TextView\n                android:text=\"-center\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n\n    </LinearLayout>\n    <LinearLayout\n            android:layout_marginTop=\"12dp\"\n            android:gravity=\"right\"\n            android:orientation=\"horizontal\">\n        <TextView\n                android:text=\"horizontal\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n        <TextView\n                android:text=\"linear\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n        <TextView\n                android:text=\"layout\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n        <TextView\n                android:text=\"-right\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n\n    </LinearLayout>\n\n    <TextView\n            android:layout_marginTop=\"12dp\"\n            android:gravity=\"center\"\n            android:text=\"more usage see Android's document\"\n            ></TextView>\n\n</LinearLayout>",
        "sample_listview": "<FrameLayout>\n    <ListView id=\"listView\">\n    </ListView>\n</FrameLayout>",
        "sample_listview_item": "<FrameLayout id=\"item_layout\"\n             android:layout_width=\"match_parent\"\n             android:padding=\"32dp\">\n    <TextView id=\"item_text\"\n              android:padding=\"16dp\"\n              android:layout_width=\"wrap_content\"\n              android:layout_height=\"wrap_content\"\n              android:background=\"#55000000\"\n              android:textColor=\"white\"\n              android:layout_gravity=\"center\"\n            >\n    </TextView>\n</FrameLayout>",
        "sample_picker": "<LinearLayout\n        android:orientation=\"vertical\"\n        android:gravity=\"center\">\n    <NumberPicker id=\"picker\"\n                  android:layout_height=\"280dp\"\n                  android:itemCount=\"5\"\n                  android:minValue=\"1\"\n                  android:maxValue=\"9\"\n            >\n        <androidui.widget.HtmlDataPickerAdapter>\n            <item>1</item>\n            <item>2</item>\n            <item>3</item>\n            <item>4</item>\n            <item>5</item>\n            <item>6</item>\n            <item>7</item>\n            <item>8</item>\n            <item>9</item>\n        </androidui.widget.HtmlDataPickerAdapter>\n    </NumberPicker>\n</LinearLayout>",
        "sample_pullrefreshload": "<androidui.widget.PullRefreshLoadLayout\n        id=\"prll\"\n        android:layout_width=\"match_parent\"\n        android:layout_height=\"match_parent\">\n    <ListView id=\"listView\">\n    </ListView>\n</androidui.widget.PullRefreshLoadLayout>",
        "sample_pullrefreshload_item": "<FrameLayout id=\"item_layout\"\n             android:layout_width=\"match_parent\"\n             android:padding=\"32dp\">\n    <TextView id=\"item_text\"\n              android:padding=\"16dp\"\n              android:layout_width=\"wrap_content\"\n              android:layout_height=\"wrap_content\"\n              android:background=\"#55000000\"\n              android:textColor=\"white\"\n              android:layout_gravity=\"center\"\n            >\n    </TextView>\n</FrameLayout>",
        "sample_relativelayout": "<RelativeLayout>\n    <TextView id=\"text1\"\n              android:style=\"@style/textStyle\"\n              android:text=\"Left&Top\"\n            ></TextView>\n    <TextView id=\"text2\"\n              android:style=\"@style/textStyle\"\n              android:text=\"Right&Top\"\n              android:layout_alignParentRight=\"true\"\n            ></TextView>\n    <TextView id=\"text3\"\n              android:style=\"@style/textStyle\"\n              android:text=\"Left&Bottom\"\n              android:layout_alignParentBottom=\"true\"\n            ></TextView>\n    <TextView id=\"text4\"\n              android:style=\"@style/textStyle\"\n              android:text=\"Right&Bottom\"\n              android:layout_alignParentRight=\"true\"\n              android:layout_alignParentBottom=\"true\"\n            ></TextView>\n    <TextView id=\"text5\"\n              android:style=\"@style/textStyle\"\n              android:text=\"VerticalCenter\"\n              android:layout_centerVertical=\"true\"\n            ></TextView>\n    <TextView id=\"text6\"\n              android:style=\"@style/textStyle\"\n              android:text=\"HorizontalCenter\"\n              android:layout_centerHorizontal=\"true\"\n            ></TextView>\n    <TextView id=\"text7\"\n              android:style=\"@style/textStyle\"\n              android:text=\"Center\"\n              android:layout_centerInParent=\"true\"\n            ></TextView>\n\n    <TextView\n            android:style=\"@style/textStyle\"\n            android:text=\"below\"\n            android:layout_marginTop=\"4dp\"\n            android:layout_below=\"text1\"\n            ></TextView>\n\n    <TextView\n              android:style=\"@style/textStyle\"\n              android:text=\"toRightOf\"\n              android:layout_marginLeft=\"4dp\"\n              android:layout_toRightOf=\"text3\"\n              android:layout_alignParentBottom=\"true\"\n            ></TextView>\n    <TextView\n              android:style=\"@style/textStyle\"\n              android:text=\"above\"\n              android:layout_marginBottom=\"4dp\"\n              android:layout_above=\"text3\"\n            ></TextView>\n    <TextView\n              android:style=\"@style/textStyle\"\n              android:text=\"toLeftOf\"\n              android:layout_marginRight=\"4dp\"\n              android:layout_toLeftOf=\"text4\"\n              android:layout_alignParentBottom=\"true\"\n            ></TextView>\n\n    <TextView\n            id=\"alignLeft\"\n              android:style=\"@style/textStyle\"\n              android:text=\"  alignLeft  \"\n              android:layout_marginTop=\"4dp\"\n              android:layout_alignLeft=\"text6\"\n              android:layout_below=\"text2\"\n            ></TextView>\n    <TextView\n              android:style=\"@style/textStyle\"\n              android:text=\"  alignRight  \"\n              android:layout_marginTop=\"4dp\"\n              android:layout_alignRight=\"text6\"\n              android:layout_below=\"alignLeft\"\n            ></TextView>\n    <TextView\n            id=\"alignTop\"\n              android:style=\"@style/textStyle\"\n              android:text=\"alignTop\"\n              android:maxWidth=\"46dp\"\n              android:layout_marginLeft=\"4dp\"\n              android:layout_alignTop=\"text7\"\n              android:layout_toRightOf=\"text7\"\n            ></TextView>\n    <TextView\n              android:style=\"@style/textStyle\"\n              android:text=\"alignBottom\"\n              android:maxWidth=\"52dp\"\n              android:layout_marginLeft=\"4dp\"\n              android:layout_alignBottom=\"text7\"\n              android:layout_toRightOf=\"alignTop\"\n            ></TextView>\n    <TextView\n              android:style=\"@style/textStyle\"\n              android:text=\"above&toLeftOf\"\n              android:layout_above=\"text7\"\n              android:layout_toLeftOf=\"text7\"\n            ></TextView>\n    <TextView\n              android:style=\"@style/textStyle\"\n              android:text=\"toRightOf & toLeftOf & below\"\n              android:layout_below=\"text7\"\n              android:layout_toLeftOf=\"text7\"\n              android:layout_toRightOf=\"text5\"\n            ></TextView>\n</RelativeLayout>",
        "sample_textview": "<ScrollView>\n    <LinearLayout\n            android:orientation=\"vertical\">\n        <View android:style=\"@style/line_spit\"></View>\n        <TextView\n                android:text=\"Text\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n        <View android:style=\"@style/line_spit\"></View>\n        <TextView\n                android:padding=\"10dp\"\n                android:text=\"Text Padding10\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n        <View android:style=\"@style/line_spit\"></View>\n        <TextView\n                android:padding=\"10dp\"\n                android:text=\"Line1\nLine2\nLine3\nLine4\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n        <View android:style=\"@style/line_spit\"></View>\n        <TextView\n                android:maxLines=\"2\"\n                android:ellipsize=\"END\"\n                android:padding=\"10dp\"\n                android:text=\"maxLines=2\nmaxLines=2\nmaxLines=2\nmaxLines=2\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n        <View android:style=\"@style/line_spit\"></View>\n        <TextView\n                android:layout_width=\"match_parent\"\n                android:padding=\"10dp\"\n                android:gravity=\"center\"\n                android:text=\"Text Center\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n        <View android:style=\"@style/line_spit\"></View>\n        <TextView\n                android:minLines=\"2\"\n                android:layout_width=\"match_parent\"\n                android:padding=\"10dp\"\n                android:gravity=\"center\"\n                android:text=\"Text minLines=2\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n        <View android:style=\"@style/line_spit\"></View>\n        <TextView\n                android:layout_width=\"match_parent\"\n                android:padding=\"10dp\"\n                android:gravity=\"right\"\n                android:text=\"Text Right\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n        <View android:style=\"@style/line_spit\"></View>\n        <TextView\n                android:layout_height=\"100dp\"\n                android:layout_width=\"match_parent\"\n                android:padding=\"10dp\"\n                android:gravity=\"center\"\n                android:text=\"Text Center\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n        <View android:style=\"@style/line_spit\"></View>\n        <TextView\n                android:layout_height=\"100dp\"\n                android:layout_width=\"match_parent\"\n                android:padding=\"10dp\"\n                android:gravity=\"bottom\"\n                android:text=\"Text Bottom\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n        <View android:style=\"@style/line_spit\"></View>\n        <TextView\n                android:layout_height=\"100dp\"\n                android:layout_width=\"match_parent\"\n                android:padding=\"10dp\"\n                android:gravity=\"center_vertical\"\n                android:text=\"Text center vertical\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n        <View android:style=\"@style/line_spit\"></View>\n        <TextView\n                android:layout_height=\"100dp\"\n                android:layout_width=\"match_parent\"\n                android:padding=\"10dp\"\n                android:gravity=\"center_horizontal\"\n                android:text=\"Text center horizontal\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n        <View android:style=\"@style/line_spit\"></View>\n        <TextView\n                android:layout_height=\"100dp\"\n                android:layout_width=\"match_parent\"\n                android:padding=\"10dp\"\n                android:gravity=\"right|bottom\"\n                android:text=\"Text right&bottom\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n        <View android:style=\"@style/line_spit\"></View>\n        <TextView\n                android:layout_height=\"wrap_content\"\n                android:layout_width=\"wrap_content\"\n                android:padding=\"10dp\"\n                android:gravity=\"center\"\n                android:drawablePadding=\"12dp\"\n                android:drawableLeftUri=\"assets/images/logo_android_1@2x.png\"\n                android:drawableTopUri=\"assets/images/logo_android_1@2x.png\"\n                android:drawableRightUri=\"assets/images/logo_android_1@2x.png\"\n                android:drawableBottomUri=\"assets/images/logo_android_1@2x.png\"\n                android:text=\"Image around text\"\n                android:style=\"@style/textStyle\"\n                ></TextView>\n    </LinearLayout>\n</ScrollView>",
        "sample_viewpager": "<FrameLayout>\n    <android.support.v4.view.ViewPager id=\"viewPager\">\n    </android.support.v4.view.ViewPager>\n</FrameLayout>",
        "sample_viewpager_gallery": "<FrameLayout>\n    <android.support.v4.view.ViewPager\n            android:background=\"#88000000\"\n            >\n        <androidui.widget.HtmlDataPagerAdapter>\n            <uk.co.senab.photoview.PhotoView\n                    android:src=\"assets/images/logo_android_3.png\">\n            </uk.co.senab.photoview.PhotoView>\n            <uk.co.senab.photoview.PhotoView\n                    android:src=\"assets/images/logo_android_2.png\">\n            </uk.co.senab.photoview.PhotoView>\n            <uk.co.senab.photoview.PhotoView\n                    android:src=\"assets/images/logo_google_1.jpg\">\n            </uk.co.senab.photoview.PhotoView>\n            <uk.co.senab.photoview.PhotoView\n                    android:src=\"assets/images/logo_google_2.png\">\n            </uk.co.senab.photoview.PhotoView>\n        </androidui.widget.HtmlDataPagerAdapter>\n    </android.support.v4.view.ViewPager>\n    <LinearLayout\n            android:padding=\"4dp 12dp\"\n            android:layout_gravity=\"bottom\"\n            android:layout_height=\"wrap_content\"\n            android:background=\"#55000000\"\n            >\n        <TextView android:textColor=\"white\">\n            Support gesture event, from\n        </TextView>\n        <TextView android:textColor=\"#FF0000cc\" android:padding=\"4dp\"\n                  android:state_pressed=\"background:#66ffffff\"\n                onclick=\"location.href = 'https://github.com/chrisbanes/PhotoView'\">\n            PhotoView\n        </TextView>\n    </LinearLayout>\n</FrameLayout>",
        "sample_viewpager_page": "<FrameLayout id=\"page_bg\">\n    <TextView id=\"page_text\"\n              android:padding=\"12dp\"\n              android:layout_width=\"wrap_content\"\n              android:layout_height=\"wrap_content\"\n              android:background=\"#55000000\"\n              android:textColor=\"white\"\n              android:layout_gravity=\"center\"\n            >\n    </TextView>\n</FrameLayout>"
};
    const _tempDiv = document.createElement('div');

    export class layout{
        static getLayoutData(layoutRef:string):HTMLElement{
            if(!layoutRef) return null;
            layoutRef = layoutRef.replace('/', '.').split('.').pop();
            if(!_layout_data[layoutRef]) return null;
            _tempDiv.innerHTML = _layout_data[layoutRef];
            let data = <HTMLElement>_tempDiv.firstElementChild;
            _tempDiv.removeChild(data);
            return data;
        }
        
        static sample_animation = '@layout/sample_animation';
        static sample_base_widget = '@layout/sample_base_widget';
        static sample_button = '@layout/sample_button';
        static sample_contacte = '@layout/sample_contacte';
        static sample_drawerlayout = '@layout/sample_drawerlayout';
        static sample_expand_listview_item = '@layout/sample_expand_listview_item';
        static sample_framelayout = '@layout/sample_framelayout';
        static sample_gridview = '@layout/sample_gridview';
        static sample_gridview_item = '@layout/sample_gridview_item';
        static sample_htmlview = '@layout/sample_htmlview';
        static sample_imageview = '@layout/sample_imageview';
        static sample_life_callback = '@layout/sample_life_callback';
        static sample_linearlayout = '@layout/sample_linearlayout';
        static sample_listview = '@layout/sample_listview';
        static sample_listview_item = '@layout/sample_listview_item';
        static sample_picker = '@layout/sample_picker';
        static sample_pullrefreshload = '@layout/sample_pullrefreshload';
        static sample_pullrefreshload_item = '@layout/sample_pullrefreshload_item';
        static sample_relativelayout = '@layout/sample_relativelayout';
        static sample_textview = '@layout/sample_textview';
        static sample_viewpager = '@layout/sample_viewpager';
        static sample_viewpager_gallery = '@layout/sample_viewpager_gallery';
        static sample_viewpager_page = '@layout/sample_viewpager_page';
    }
    android.content.res.Resources.buildLayoutFinder = (refString:string)=>{
        return layout.getLayoutData(refString)
    }
}