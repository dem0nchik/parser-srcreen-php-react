<?php
    include('simple_html_dom.php');

    //simbols of url part
    $sim = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
    "q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
    
    function rand_url_part ($sim) {
        $ulr_part = "";
        for($i = 0; $i < 6; $i++) {
            $rand = rand(1, count($sim)-1);
            $ulr_part = $ulr_part . $sim[$rand];
        }
        return $ulr_part;
    }

    function rand_urls ($count, $sim) {
        $arr_url = [];
        for($i = 0; $i < $count; $i++) {
            array_push($arr_url, "https://prnt.sc/" . rand_url_part($sim));
        }
        return $arr_url;
    }
    
    function get_photos ($count, $sim) {
        $urls = rand_urls($count, $sim);
        $photos = [];

        $context = stream_context_create(
            array(
                "http" => array(
                    "header" => "User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"
                )
            )
        );

        foreach($urls as $e) {
            $html = file_get_html($e, false, $context);
            $img = $html->find('img.no-click')[0]->src;
            array_push($photos, ["img"=>$img]);
        }
        
        return $photos;
    }
    
    
    $count = $_GET['count'];

    $photos = get_photos($count, $sim);
    header("Access-Control-Allow-Origin:*");
    header("Content-type: application/json");
    echo json_encode($photos);


?>
