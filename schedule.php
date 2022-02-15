<?php
include 'vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;



$spreadsheet = IOFactory::load('schedule.xlsx'); // load file
$objWorksheet = $spreadsheet->getActiveSheet();
$worksheet = $spreadsheet->setActiveSheetIndex(0); // select firts sheet

$i = 0;
$arrLevel = [];

foreach ($worksheet->getRowDimensions() as $rowDimension) {
    $i++;

    $arrLevel[$i]['level'] = $rowDimension->getOutlineLevel(); // get level
}
$highestColumn = $worksheet->getHighestColumn(); // e.g 'F'

foreach ($objWorksheet->getRowIterator() as $row) {
    $cellIterator = $row->getCellIterator();
    $cellIterator->setIterateOnlyExistingCells(true);

    foreach ($cellIterator as $cell) {
        $arrLevel[$row->getRowIndex()]["excel"][$cell->getColumn()] = $cell->getValue(); // merge level and value
    }
}
?>
<pre>
    <code>
        <?php
            echo json_encode($arrLevel, JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE);

        ?>
    </code>
</pre>

