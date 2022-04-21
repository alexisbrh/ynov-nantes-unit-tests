<?php

use PHPUnit\Framework\TestCase;

require_once('./src/flatten.php');

class FlattenTest extends TestCase
{
    public function test__array_1()
    {
        $this->assertEquals(flatten([[17, [39, 15]], [12]]), [17, 39, 15, 12]);
    }
    public function test__array_2()
    {
        $this->assertEquals(flatten([[[17, [39, [15]]], [12]]]), [17, 39, 15, 12]);
    }
    public function test__array_3()
    {
        $this->assertEquals(flatten([17, [39, 15], 12]), [17, 39, 15, 12]);
    }
}