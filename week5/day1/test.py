import unittest
import extend

class TestExtend(unittest.TestCase):
    def setUp(self):
        pass

    def test_add_2_and_3_is_5(self):
        self.assertEqual(extend.add(2, 3), 5)

    def test_add_4_and_1_is_5(self):
        self.assertEqual(extend.add(4, 1), 5)

    def test_max_of_three_first(self):
        self.assertEqual(extend.max_of_three(5, 4, 3), 5)

    def test_max_of_three_third(self):
        self.assertEqual(extend.max_of_three(3, 4, 5), 5)

    def test_median_four(self):
        self.assertEqual(extend.median([7,5,3,5]), 5)

    def test_median_five(self):
        self.assertEqual(extend.median([1,2,3,4,5]), 3)

    def test_is_vovel_a(self):
        self.assertTrue(extend.is_vovel('a'))

    def test_is_vovel_u(self):
        self.assertTrue(extend.is_vovel('u'))

    def test_translate_bemutatkozik(self):
        self.assertEqual(extend.translate('bemutatkozik'), 'bevemuvutavatkovozivik')

    def test_translate_kolbice(self):
        self.assertEqual(extend.translate('kolbice'), 'kovolbiviceve')



    def test_add_3_and_12_is_15(self):
        self.assertEqual(extend.add(3, 12), 15)

    def test_max_of_three_first(self):
        self.assertEqual(extend.max_of_three(1, 6, 2), 6)

    def test_median_four_b(self):
        self.assertEqual(extend.median([1, 5, 7, 10]), 6)

    def test_median_five_b(self):
        self.assertEqual(extend.median([2, 1, 5, 4, 3]), 3)

    def test_is_vovel_a(self):
        self.assertTrue(extend.is_vovel('A'))

    def test_translate_bemutatkozik_b(self):
        self.assertEqual(extend.translate('alma'), 'avalmava')


if __name__ == '__main__':
    unittest.main()
