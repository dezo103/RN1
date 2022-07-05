import {StatusBar} from 'expo-status-bar';
import {
    Button,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Image,
    ScrollView,
    FlatList, ListRenderItem, TextInput, ActivityIndicator, Dimensions, ImageBackground
} from 'react-native';
import {useState} from "react";
import Svg from "react-native-svg";

type dataArrayType = {
    id: number
    title: string
}

const WIDTH_SCREEN = Dimensions.get('screen').width
const HEIGHT_SCREEN = Dimensions.get('screen').height
const WIDTH_ITEM = Math.floor(WIDTH_SCREEN * 0.9)

const backgroundImage1 = {uri: 'https://pod-potol.com/upload/medialibrary/2b7/2b723d5e1526ec69b266caac5d9ff72a.jpg'}
const backgroundImage = {uri: 'https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80'}
const backgroundImage2 = {uri: 'http://strport.ru/sites/default/files/2_517.jpg'}

const dataArray: Array<dataArrayType> = new Array(100).fill(null).map((el, index) => ({
    id: index + 1,
    title: "Lesson RN " + (index + 1)
}))


export default function App() {

    const [value, setValue] = useState('')

    const render: ListRenderItem<dataArrayType> = ({item, index, separators}) => {
        return (
            <View style={{backgroundColor: "transparent", marginVertical: 48, marginHorizontal: 6}}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: '500',
                    paddingHorizontal: 12,
                    paddingVertical: 20
                }}>{item.title}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/*<FlatList data={dataArray}*/}
            {/*          renderItem={render}*/}
            {/*          horizontal*/}
            {/*          keyExtractor={item => item.id.toString()}*/}
            {/*/>*/}
            {/*<Text style={{margin: 10}}>{JSON.stringify(WIDTH_ITEM, null, 2)}</Text>*/}
            {/*<Text style={{margin: 10}}>{value}</Text>*/}
            {/*<TextInput onChangeText={setValue} style={[styles.input, {backgroundColor: '#fff'}]}/>*/}
            {/*<ActivityIndicator size='large' color='indianred'/>*/}
            <View style={[styles.box, {flex: 1}]}>
                <ImageBackground source={backgroundImage1} resizeMode="cover" style={styles.image}>
                    <Text style={[styles.text]}>Hello</Text>
                </ImageBackground>
            </View>
            <View style={[styles.box, {flex: 5}]}>
                <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
                    <Text style={[styles.text]}>Hi, there</Text>
                </ImageBackground>
            </View>
            <View style={[styles.box, {flex: 1}]}>
                <ImageBackground source={backgroundImage2} resizeMode="cover" style={styles.image}>
                    <Text style={[styles.text]}>Goodbye</Text>
                </ImageBackground>
            </View>
    <StatusBar style="auto"/>
</View>
)
    ;
}

const styles = StyleSheet.create({
    container: {
        width: WIDTH_ITEM,
        //height: Math.floor(HEIGHT_SCREEN * 0.7),
        marginLeft: (WIDTH_SCREEN - WIDTH_ITEM) / 2,
        marginTop: 40,
        flex: 1,
        //backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        fontSize: 20,
        width: '60%',
        height: 38,
        backgroundColor: '#000',
        margin: 10
    },
    box: {
        //height: 30,
        //margin: 5,
        width: '100%',
        borderStyle: 'solid',
        borderColor: 'transparent',
       // borderWidth: 2,
        //borderRadius: 15,
        overflow: "hidden",
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    image: {
        flex: 1,
    },
    text: {
        fontSize: 40,
        color: 'white'
    },
});


// <ScrollView style={{backgroundColor: 'yellow'}}>
//     <View style={{width: 300, height: 300, backgroundColor: 'indianred', borderRadius: 25}}>
//         <View style={{width: '50%', height: '10%', backgroundColor: 'yellowgreen'}}/>
//         <Button title={'Button test'} onPress={() => {}}/>
//         <View style={{marginTop: 15}}/>
//         <TouchableOpacity>
//             <View>
//                 <Text>Button TouchableOpacity</Text>
//             </View>
//         </TouchableOpacity>
//         <View style={{marginTop: 15}}/>
//         <TouchableWithoutFeedback onPress={() => {console.log('TouchableWithoutFeedback')}}>
//             <View>
//                 <Text>Button TouchableOpacity</Text>
//             </View>
//         </TouchableWithoutFeedback>
//         <Pressable onPress={() => {
//             console.log('pressable')
//         }}>
//             <View style={{width: 70, height: 50, backgroundColor: '#777777'}}>
//                 <Text>Pressable</Text>
//             </View>
//         </Pressable>
//         <Text>А может ты</Text>
//     </View>
//     <Image style={{height: 50, width: 300, borderRadius: 25}}
//            source={{uri: 'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg'}}/>
//     <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolore et excepturi,
//         maiores nihil quam quas qui repellendus sequi tenetur. Alias animi asperiores autem blanditiis
//         cumque ducimus, eligendi est exercitationem ipsum iste modi nobis nulla, officia quam quibusdam
//         saepe suscipit tenetur vel vero voluptate. Accusantium aliquam earum ex fuga fugit minus quaerat
//         quia suscipit. A accusantium architecto aut blanditiis eligendi explicabo itaque iusto libero magnam
//         maxime quidem sapiente sunt tenetur, vitae, voluptatem? Cupiditate harum, necessitatibus. Blanditiis
//         corporis debitis dolorem eos expedita, explicabo facere laborum magnam nostrum officia omnis rem repellat
//         tempore voluptate, voluptatum? A architecto dolorem, doloribus eius eos, ipsam iusto molestiae natus nobis
//         quasi sapiente voluptatum. Aliquam aliquid at quae soluta sunt! Beatae eaque facilis, in libero placeat quod
//         voluptatibus. Delectus earum harum libero quidem sequi sit. A aliquid delectus natus nostrum odio provident quaerat
//         quam, quisquam repellat suscipit! Aspernatur commodi corporis debitis eius exercitationem necessitatibus porro saepe
//         tenetur totam ullam? Consequuntur deserunt eligendi exercitationem facilis laborum magnam magni nemo nisi odit officia,
//         optio provident, quisquam quo quos tempore! Ab illo quaerat reiciendis repudiandae sint temporibus voluptas. Dolores neque,
//         sapiente! Amet, architecto, blanditiis consequuntur cumque dolor dolorem, doloremque dolorum earum error esse ex facilis nam
//         nihil quasi sequi voluptas voluptatibus voluptatum! Alias aliquid assumenda at facere ipsa libero nemo nobis odio
//         omnis reiciendis repudiandae suscipit temporibus, voluptate? Aspernatur possimus quisquam recusandae, sed temporibus
//         velit? Accusantium architecto asperiores autem eligendi excepturi facilis fuga hic numquam, quisquam quo repudiandae
//         similique sit ut? Dolorem eveniet expedita fugit, porro quis quod veniam! Architecto excepturi fugit laudantium
//         maxime minus nam neque tempore temporibus, voluptatum. Consectetur distinctio dolor, dolorum ducimus ea inventore modi
//         nam nostrum obcaecati quibusdam rerum saepe unde velit. Adipisci, atque consequatur doloremque expedita labore maiores
//         neque nisi nobis numquam quia, quo ratione repellat ut vero voluptatibus! Ab accusamus accusantium ad alias animi consequuntur
//         cum delectus dicta ea eius ex facere facilis fugit harum id impedit incidunt ipsum labore laudantium magnam nihil nobis nulla
//         officia pariatur, placeat porro quaerat quod quos ratione reiciendis repellendus rerum similique sint tempora totam voluptas
//         voluptatibus? Accusantium adipisci blanditiis consequatur consequuntur doloremque dolores dolorum ducimus exercitationem impedit itaque,
//         iusto laudantium magni maxime minima minus nemo non officia perspiciatis placeat quasi
//         quibusdam reiciendis repudiandae sed sequi similique ut velit! Accusamus aliquam assumenda
//         at aut commodi, debitis dicta eos est eum in maxime molestias non numquam pariatur, porro
//         quia suscipit ullam velit voluptas voluptatem. Consectetur doloremque earum nulla, perspiciatis provident quos voluptatum. At eligendi
//         enim nemo quam ullam! A accusamus blanditiis culpa deserunt ducimus enim facere inventore ipsa ipsam iste minus nemo numquam odit
//         possimus provident quam quo, repellendus saepe suscipit unde veniam voluptas voluptatem! Accusamus commodi cumque dolorem ducimus
//         minus nam nihil nobis perspiciatis quis ut. Adipisci aspernatur corporis, dicta dignissimos dolor dolorem eius ex illo in libero,
//         maxime modi molestiae necessitatibus nulla perspiciatis quae quaerat reiciendis sequi, vero voluptates. A ab accusamus ad corporis
//         dignissimos, dolorem enim, facilis fugiat fugit ipsam laudantium nulla numquam pariatur possimus qui repellat, sint veritatis voluptate.
//         Eius nobis reprehenderit sequi. Accusantium commodi dolorem ducimus eaque iste porro ratione suscipit totam veritatis voluptatum. Accusantium
//         architecto dolorem nihil numquam qui reprehenderit voluptas voluptatibus. Commodi corporis culpa cum debitis dignissimos enim impedit in
//         iusto magnam maxime nostrum nulla numquam, odit possimus quae quam reiciendis repellendus saepe sapiente sequi sit soluta sunt tenetur ut
//         voluptate? Amet fugit ratione reiciendis unde. Corporis culpa dolores ducimus, ea enim facere ipsam optio praesentium provident qui repellat,
//         sed soluta voluptatibus. A ab accusantium, ad aperiam atque consequatur culpa cum cupiditate deserunt doloremque dolorum ducimus enim eos
//         esse eum expedita illo incidunt ipsa molestias nobis obcaecati officiis perferendis provident quis, quisquam quos saepe sunt totam veniam
//         veritatis vero voluptas voluptate voluptatum. Ab architecto assumenda cum excepturi facere fuga inventore ipsum iusto nobis, optio possimus
//         praesentium recusandae reiciendis reprehenderit veritatis. Deleniti itaque molestias, nisi nulla perferendis possimus quas vero. Ab alias
//         aliquam aliquid amet, animi autem consectetur cum deserunt dicta eaque enim error est facilis harum illo impedit in ipsum itaque iusto labore
//         laboriosam magnam molestiae mollitia nulla obcaecati pariatur quam quia quisquam repellendus reprehenderit, sunt suscipit tempore, veritatis
//         vitae voluptate voluptatem voluptatibus. Architecto doloribus est facere facilis in ipsa laboriosam necessitatibus nesciunt nobis quidem quos
//         repellat repudiandae rerum sequi, similique unde vitae voluptate? Commodi distinctio doloribus ea eaque enim impedit inventore libero, minus
//         nesciunt odit provident quibusdam repellendus vitae? Consequatur dicta magnam numquam obcaecati veniam. Aut dolores dolorum ea exercitationem
//         ipsum maxime provident ratione reprehenderit sunt tenetur. Asperiores blanditiis consequatur dignissimos distinctio doloribus earum est eveniet
//         fuga in magni nulla omnis perferendis quasi quibusdam quidem reprehenderit repudiandae, soluta totam ullam ut. Blanditiis iste quis
//         repudiandae totam voluptas! At hic mollitia repudiandae sunt veniam? Accusantium assumenda consectetur deleniti eum fuga magni maxime natus
//         nisi numquam pariatur quam, recusandae sequi soluta tempore velit vitae voluptates. Beatae culpa debitis dolores ea error esse facere fuga
//         harum, impedit in laboriosam odit officia pariatur perspiciatis quaerat quisquam recusandae saepe ut veniam veritatis. A alias aperiam
//         architecto atque aut beatae deserunt dolor doloribus eaque eligendi illo ipsum itaque minus nemo odio optio pariatur quae quibusdam, quidem
//         quisquam repellendus sint sit, suscipit tempore voluptas? Accusamus blanditiis consectetur cumque eum fugit incidunt laboriosam natus neque
//         numquam obcaecati omnis optio, quas quidem velit voluptatum! Accusamus accusantium adipisci amet, assumenda atque autem deserunt dignissimos
//         eaque est et ex fugiat harum id, illo in incidunt inventore iure iusto minima nemo obcaecati odio odit officia, quasi quis ratione repudiandae
//         sapiente similique sint tempora temporibus tenetur totam unde. Consequatur corporis in minus non officia qui rem repellat, soluta. Atque
//         consectetur culpa incidunt modi quam sit. Accusantium aut corporis cum debitis deserunt dignissimos eaque esse expedita inventore ipsam
//         itaque libero, molestiae nesciunt officia officiis perferendis porro quo quod similique unde velit voluptas voluptatem voluptatum. Aut
//         dolore dolorum fuga illum laborum officia, pariatur perspiciatis quam quibusdam saepe soluta tempora totam vero. Aspernatur ullam, ut. Ad
//         adipisci asperiores assumenda commodi consequatur dicta dolorum excepturi fugiat hic in itaque iusto libero maxime modi molestias nihil
//         omnis perferendis qui quis quo repellat repellendus reprehenderit, sed temporibus unde voluptatibus voluptatum! Recusandae.</Text>
// </ScrollView>