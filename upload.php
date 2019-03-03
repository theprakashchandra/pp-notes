<?php

header('Content-Type: text/plain; charset=utf-8');

/*-------------------------change this----------------*/
            $target_dir ='images/';
/*-------------------------------------------------*/
try {
    if (
        !isset($_FILES['image_file']['error']) ||
        is_array($_FILES['image_file']['error'])
    ) {
        throw new RuntimeException('Invalid parameters.');
    }

    // Check $_FILES['image_file']['error'] value.
    switch ($_FILES['image_file']['error']) {
        case UPLOAD_ERR_OK:
            break;
        case UPLOAD_ERR_NO_FILE:
            throw new RuntimeException('No file sent.');
        case UPLOAD_ERR_INI_SIZE:
        case UPLOAD_ERR_FORM_SIZE:
            throw new RuntimeException('Exceeded filesize limit.');
        default:
            throw new RuntimeException('Unknown errors.');
    }
 
    $finfo = new finfo(FILEINFO_MIME_TYPE);
    if (false === $ext = array_search(
        $finfo->file($_FILES['image_file']['tmp_name']),
        array(
            'jpg' => 'image/jpeg',
            'png' => 'image/png',
            'gif' => 'image/gif',
        ),
        true
    )) {
        throw new RuntimeException('Invalid file format.');
    }

    if (!move_uploaded_file(
        $_FILES['image_file']['tmp_name'],
        sprintf('./uploads/%s.%s',$target_dir.
            sha1_file($_FILES['image_file']['tmp_name']),
            $ext
        )
    )) {
        throw new RuntimeException('Failed to move uploaded file.');
    }

    echo 'File is uploaded successfully.';

} catch (RuntimeException $e) {

    echo $e->getMessage();

}

?>
