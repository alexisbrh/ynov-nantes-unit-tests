<?php

use PHPUnit\Framework\TestCase;

require_once('./src/TempTracker.php');

class TempTrackerTest extends TestCase {
    public function test__insert() {
        $temp = new TempTracker();

        $temp->insert(10);
        $this->assertEquals($temp->get_temps(), [10]);
    }

    public function test__get_max() {
        $temp = new TempTracker();

        $temp->insert(10);
        $temp->insert(20);

        $this->assertEquals($temp->get_max(), 20);
    }

    public function test__get_min() {
        $temp = new TempTracker();

        $temp->insert(10);
        $temp->insert(20);

        $this->assertEquals($temp->get_min(), 10);
    }
}