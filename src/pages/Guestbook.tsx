import { Box } from "@chakra-ui/react";
import PageInfoHeader from "../components/PageInfoHeader";
import useDisplayHooks from "../hooks/useDisplayHooks";

const Guestbook = () => {
  const { borderColor } = useDisplayHooks();
  return (
    <Box as='main' w='full'>
      <PageInfoHeader />
      <Box
        borderTop='.6px solid'
        borderColor={borderColor}
        justifyContent='center'
        alignItems='center'
        as='main'
        bg='red.200'
        px='10px'
      >
        Guest book see Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quia
        deserunt nesciunt ipsum, commodi dolores impedit? Magni ea eum facilis. Vitae numquam in
        modi quibusdam corporis autem odio perspiciatis veritatis. Possimus harum cum qui quia
        laborum laudantium accusamus tenetur dolores eveniet veniam est reprehenderit voluptate ea,
        repellendus cupiditate asperiores distinctio perspiciatis eaque labore tempore nam nulla quo
        obcaecati ex! Modi. Vel modi aut provident consectetur, dolor molestiae voluptatem non
        tenetur! In laborum, adipisci architecto, rem veritatis ea possimus perspiciatis blanditiis
        nobis nostrum ducimus modi recusandae tenetur quod unde, incidunt iste? Veniam id nihil
        quasi? Repellendus obcaecati facere, cum pariatur tempore officia omnis atque exercitationem
        praesentium laudantium deserunt nesciunt ea dolores illum ipsum fuga quaerat in minus vel
        sit labore quas! Rerum, cupiditate deserunt aut illum quas quo reprehenderit quasi unde.
        Officia et consequatur incidunt libero deleniti quam placeat mollitia, cumque est nesciunt
        sapiente vero! Corporis, delectus. Dignissimos omnis quasi aliquid. Ipsam et, in
        consequuntur dignissimos dolor iusto quibusdam iure facilis esse dolorum, optio eius
        perferendis tempora unde? Sunt minima praesentium unde neque adipisci. Quaerat quia
        architecto sit nihil at corporis! Harum optio accusantium delectus eius amet ipsam alias
        dolor officia esse dolore? Dolorem quo at, voluptas, esse natus quam fugiat voluptates
        officiis quasi quaerat necessitatibus, molestiae praesentium ad veniam eos? Vel, at? Porro
        nobis reiciendis vero quibusdam, accusantium asperiores quod, saepe cumque praesentium
        obcaecati explicabo ab doloremque optio repellendus recusandae repudiandae? Enim totam dicta
        eligendi officiis magnam. Consequuntur, sit assumenda. Distinctio tempora saepe provident
        accusamus voluptatum similique dolorum repellendus, recusandae ab. Placeat vero inventore
        adipisci aperiam aspernatur repellendus, omnis minus libero! Aliquam suscipit atque enim
        impedit non, cumque modi praesentium. Omnis eligendi explicabo, praesentium tempore eos
        nobis soluta vitae ad, laborum ex autem numquam porro voluptates dignissimos voluptatibus
        neque! Repellat dolorum sint maiores officiis id eos soluta nostrum, nihil quod.
      </Box>
    </Box>
  );
};

export default Guestbook;
